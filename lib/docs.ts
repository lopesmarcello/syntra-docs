import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { docsNavigation, allDocPages } from '@/config/docs-navigation';

const CONTENT_DIR = path.join(process.cwd(), 'content', 'docs');

export type DocFrontmatter = {
    title: string;
    description: string;
    section?: string;
};

export function getDocBySlug(slug: string[]): { frontmatter: DocFrontmatter; filePath: string } | null {
    const slugPath = slug.length === 0 ? ['getting-started', 'index'] : slug;
    const candidates = [
        path.join(CONTENT_DIR, ...slugPath) + '.mdx',
        path.join(CONTENT_DIR, ...slugPath, 'index.mdx'),
    ];

    for (const filePath of candidates) {
        if (fs.existsSync(filePath)) {
            const raw = fs.readFileSync(filePath, 'utf-8');
            const { data } = matter(raw);
            return {
                frontmatter: data as DocFrontmatter,
                filePath,
            };
        }
    }

    return null;
}

export function getAllDocs(): { slug: string[]; frontmatter: DocFrontmatter }[] {
    const results: { slug: string[]; frontmatter: DocFrontmatter }[] = [];

    function walk(dir: string, base: string[] = []) {
        if (!fs.existsSync(dir)) return;
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        for (const entry of entries) {
            if (entry.isDirectory()) {
                walk(path.join(dir, entry.name), [...base, entry.name]);
            } else if (entry.name.endsWith('.mdx')) {
                const name = entry.name.replace(/\.mdx$/, '');
                const slug = name === 'index' ? base : [...base, name];
                const filePath = path.join(dir, entry.name);
                const raw = fs.readFileSync(filePath, 'utf-8');
                const { data } = matter(raw);
                results.push({ slug, frontmatter: data as DocFrontmatter });
            }
        }
    }

    walk(CONTENT_DIR);
    return results;
}

export function getDocNavigation() {
    return docsNavigation;
}

export function getPrevNextPages(currentHref: string): {
    prev: { title: string; href: string } | null;
    next: { title: string; href: string } | null;
} {
    const index = allDocPages.findIndex((p) => p.href === currentHref);
    return {
        prev: index > 0 ? allDocPages[index - 1] : null,
        next: index < allDocPages.length - 1 ? allDocPages[index + 1] : null,
    };
}

export function generateAllDocStaticParams(): { slug: string[] }[] {
    const pages = getAllDocs();
    return pages.map(({ slug }) => ({ slug }));
}
