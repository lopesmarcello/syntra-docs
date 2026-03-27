import { notFound } from 'next/navigation';
import { getDocBySlug, getPrevNextPages, generateAllDocStaticParams } from '@/lib/docs';
import { PageHeader } from '@/components/docs/PageHeader';
import { PrevNextNav } from '@/components/docs/PrevNextNav';
import { DocContent } from '@/components/docs/DocContent';

type PageProps = {
    params: Promise<{ slug?: string[] }>;
};

export async function generateStaticParams() {
    return generateAllDocStaticParams();
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps) {
    const { slug = [] } = await params;
    const doc = getDocBySlug(slug);

    if (!doc) return {};

    return {
        title: `${doc.frontmatter.title} — Syntra Docs`,
        description: doc.frontmatter.description,
    };
}

export default async function DocPage({ params }: PageProps) {
    const { slug = [] } = await params;
    const doc = getDocBySlug(slug);

    if (!doc) notFound();

    // Build the href to look up prev/next
    const href = slug.length === 0 ? '/docs/getting-started' : `/docs/${slug.join('/')}`;
    const { prev, next } = getPrevNextPages(href);

    // Dynamically import the MDX file
    const slugPath = slug.length === 0 ? ['getting-started', 'index'] : slug;
    const mdxPath = [slugPath.join('/')];

    // Determine whether to load index.mdx or direct file
    let Content: React.ComponentType;
    try {
        const mod = await import(`@/content/docs/${slugPath.join('/')}.mdx`);
        Content = mod.default;
    } catch {
        try {
            const mod = await import(`@/content/docs/${slugPath.join('/')}/index.mdx`);
            Content = mod.default;
        } catch {
            notFound();
        }
    }

    return (
        <>
            <PageHeader
                title={doc.frontmatter.title}
                description={doc.frontmatter.description}
            />
            <DocContent>
                <Content />
            </DocContent>
            <PrevNextNav prev={prev} next={next} />
        </>
    );
}
