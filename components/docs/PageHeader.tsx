type PageHeaderProps = {
    title: string;
    description?: string;
};

export function PageHeader({ title, description }: PageHeaderProps) {
    return (
        <div className="mb-8 border-b border-border pb-8">
            <h1 className="mb-2 text-4xl font-bold tracking-tight text-foreground">
                {title}
            </h1>
            {description && (
                <p className="text-lg text-foreground-muted">{description}</p>
            )}
        </div>
    );
}
