import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function FeatureCards() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <Card>
        <CardHeader className="font-mono text-sm text-muted-foreground">
          Code Explanation
        </CardHeader>
        <CardContent className="text-base font-sans">
          Understand complex functions with GPT-powered natural language explanations.
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="font-mono text-sm text-muted-foreground">
          Vault Scan
        </CardHeader>
        <CardContent className="text-base font-sans">
          Detect secrets, tokens, and credentials in your codebase before you commit.
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="font-mono text-sm text-muted-foreground">
          Commit Summary
        </CardHeader>
        <CardContent className="text-base font-sans">
          View an AI-curated timeline of key changes across your repository.
        </CardContent>
      </Card>
    </div>
  );
}
