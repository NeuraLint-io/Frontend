'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <main className="max-w-6xl mx-auto px-6 py-24 flex flex-col gap-24 items-center text-center">
        {/* HERO */}
        <div className="space-y-6">
          <Image src="/logo.png" alt="NeuraLint logo" width={72} height={72} className="mx-auto" />
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
            Supercharge Your Codebase with AI
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            NeuraLint explains, secures, and summarizes your code using your favorite AI models — GPT, Claude, Gemini. Built for developers, by developers.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button asChild size="lg">
              <Link href="/auth">Sign in with GitHub</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="https://github.com/your-org/neuralint" target="_blank">GitHub</Link>
            </Button>
          </div>
        </div>

        {/* FEATURES */}
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {[
            {
              title: 'Multi-Model Support',
              description: 'Choose between GPT-4, Claude 3, or Gemini Pro to analyze your code.',
            },
            {
              title: 'Secure by Design',
              description: 'All analysis runs client-side or with encrypted transmission. Your code stays safe.',
            },
            {
              title: 'Code Intelligence',
              description: 'Receive summaries, risk reports, and code explanations instantly.',
            },
            {
              title: 'Workflow Integrations',
              description: 'Use it inside VS Code, CI pipelines, or your browser.',
            },
            {
              title: 'Customizable Rules',
              description: 'Bring your own linting logic and extend it with prompts.',
            },
            {
              title: 'Open Source Core',
              description: 'Built transparently. Contribute or self-host.',
            },
          ].map(({ title, description }) => (
            <Card key={title} className="text-left">
              <CardHeader className="text-lg font-semibold">{title}</CardHeader>
              <CardContent className="text-muted-foreground">{description}</CardContent>
            </Card>
          ))}
        </section>

        {/* CTA */}
        <section className="text-center space-y-4">
          <h2 className="text-2xl font-bold">Ready to level up your repo?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Sign in with GitHub and get your first repo analysis in under a minute.
          </p>
          <Button asChild size="lg">
            <Link href="/auth">Get Started</Link>
          </Button>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="text-center text-sm text-muted-foreground pb-6">
        © {new Date().getFullYear()} NeuraLint. Built with ❤️ by Divs.
      </footer>
    </div>
  );
}
