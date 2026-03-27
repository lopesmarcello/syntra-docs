import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6">
      <div className="flex max-w-lg flex-col items-center gap-8 text-center">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-5xl font-bold tracking-tight text-foreground">
            Syntra
          </h1>
          <p className="text-xl text-foreground-muted">
            Structured AI-assisted development for your team.
          </p>
        </div>

        <div className="w-full rounded-lg border border-border bg-surface-subtle px-5 py-3 font-mono text-sm text-foreground">
          npm install -g syntra
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/docs/getting-started"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-accent px-6 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-hover"
          >
            Get Started
          </Link>
          <a
            href="https://github.com/lopesmarcello/syntra"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-lg border border-border px-6 text-sm font-medium text-foreground-muted transition-colors hover:bg-surface-subtle hover:text-foreground"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </main>
  );
}
