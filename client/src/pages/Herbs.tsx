import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { herbs } from "@/lib/data";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

export default function Herbs() {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">用药规律分析</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>高频中药使用频率 (Top 5)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-96 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={herbs}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="frequency"
                  >
                    {herbs.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>核心方剂：半夏厚朴汤</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                研究发现，半夏厚朴汤及其加减方在156个有明确方剂名称的处方中出现了98次，占比高达62.8%，确立了其作为梅核气治疗基础方的地位。
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-muted rounded-lg">
                  <h3 className="font-semibold mb-2">组成药物</h3>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>半夏 (59.5%)</li>
                    <li>厚朴 (52.2%)</li>
                    <li>茯苓 (59.8%)</li>
                    <li>生姜</li>
                    <li>苏叶 (苏梗 45.0%)</li>
                  </ul>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <h3 className="font-semibold mb-2">功效主治</h3>
                  <p className="text-sm">行气散结，降逆化痰。主治梅核气，咽中如有物阻，咯吐不出，吞咽不下，胸胁满闷。</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
