import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { patterns } from "@/lib/data";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function Patterns() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">证型特征图谱</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {patterns.map(pattern => (
          <Card key={pattern.id} className="h-full">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>{pattern.name}</span>
                <span className="text-sm font-normal text-muted-foreground">
                  样本占比: {pattern.percentage}%
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={pattern.keyFeatures.slice(0, 5)} layout="vertical">
                    <XAxis type="number" hide />
                    <YAxis 
                      dataKey="name" 
                      type="category" 
                      width={150} 
                      tick={{ fontSize: 12 }}
                      interval={0}
                    />
                    <Tooltip />
                    <Bar dataKey="weight" fill="var(--primary)" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                {pattern.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
