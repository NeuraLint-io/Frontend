'use client'; // ✅ must be the first line

import { useParams } from 'next/navigation';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import FeatureCards from '@/components/FeatureCards';

const modelOptions = ['gpt-4', 'claude-3', 'gemini-pro'];

export default function RepoAnalysisPage() {
  const { name } = useParams();
  const [selectedModel, setSelectedModel] = useState('gpt-4');
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState('');

  const handleAnalyze = async () => {
    setLoading(true);
    setOutput('');

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/analyze`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        repoName: name,
        model: selectedModel,
      }),
    });

    const data = await res.json();
    setOutput(data.result);
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 space-y-6">
      <h1 className="text-3xl font-bold">🔍 Analyzing: {name}</h1>

      <Card>
        <CardHeader className="font-semibold">Choose AI Model</CardHeader>
        <CardContent>
          <Select value={selectedModel} onValueChange={setSelectedModel}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select model" />
            </SelectTrigger>
            <SelectContent>
              {modelOptions.map((model) => (
                <SelectItem key={model} value={model}>
                  {model}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      <Button onClick={handleAnalyze} disabled={loading}>
        {loading ? 'Analyzing...' : 'Analyze Repo'}
      </Button>

      <FeatureCards />

      {output && (
        <Card>
          <CardHeader>AI Output</CardHeader>
          <CardContent>
            <pre className="whitespace-pre-wrap text-sm">{output}</pre>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
