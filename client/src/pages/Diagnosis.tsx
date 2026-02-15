import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { patterns } from "@/lib/data";

export default function Diagnosis() {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [result, setResult] = useState<any>(null);

  const allSymptoms = Array.from(new Set(patterns.flatMap(p => p.keyFeatures.map(f => f.name))));

  const handleDiagnose = () => {
    // Simple weighted scoring based on self-attention weights
    const scores = patterns.map(pattern => {
      let score = 0;
      pattern.keyFeatures.forEach(feature => {
        if (selectedSymptoms.includes(feature.name)) {
          score += feature.weight;
        }
      });
      return { ...pattern, score };
    });

    scores.sort((a, b) => b.score - a.score);
    setResult(scores[0]);
  };

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">交互式证型辨识</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>请勾选患者出现的症状</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {allSymptoms.map(symptom => (
                  <div key={symptom} className="flex items-start space-x-2">
                    <Checkbox 
                      id={symptom} 
                      checked={selectedSymptoms.includes(symptom)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setSelectedSymptoms([...selectedSymptoms, symptom]);
                        } else {
                          setSelectedSymptoms(selectedSymptoms.filter(s => s !== symptom));
                        }
                      }}
                    />
                    <Label htmlFor={symptom} className="leading-tight cursor-pointer">
                      {symptom}
                    </Label>
                  </div>
                ))}
              </div>
              <Button className="mt-6 w-full" onClick={handleDiagnose}>
                开始辨识
              </Button>
            </CardContent>
          </Card>
        </div>

        <div>
          {result && (
            <Card className="bg-primary/5 border-primary">
              <CardHeader>
                <CardTitle>辨识结果推荐</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-primary">{result.name}</h2>
                  <p className="text-sm text-muted-foreground mt-2">
                    匹配度得分: {(result.score * 100).toFixed(1)}
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">证型描述</h3>
                    <p className="text-sm text-muted-foreground">{result.description}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">核心辨识依据</h3>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      {result.keyFeatures.slice(0, 5).map((f: any) => (
                        <li key={f.name} className={selectedSymptoms.includes(f.name) ? "text-primary font-medium" : "text-muted-foreground"}>
                          {f.name} (权重: {f.weight})
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
