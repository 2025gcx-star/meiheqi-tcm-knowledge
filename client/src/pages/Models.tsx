import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { models } from "@/lib/data";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

export default function Models() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">机器学习模型性能</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>多标签分类性能比较 (F1 Score)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-96 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={models} layout="vertical">
                  <XAxis type="number" domain={[0, 60]} />
                  <YAxis dataKey="name" type="category" width={150} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="f1" fill="#8884d8" name="F1 Score (%)" />
                  <Bar dataKey="precision" fill="#82ca9d" name="Precision (%)" />
                  <Bar dataKey="recall" fill="#ffc658" name="Recall (%)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>模型解读</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                研究比较了四种机器学习模型在梅核气证型预测任务上的性能。结果显示，前馈神经网络（FNN）在综合F1分数上达到了52.8%，优于其他传统机器学习算法。
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-muted rounded-lg">
                  <h3 className="font-semibold mb-2">为什么选择深度学习？</h3>
                  <p className="text-sm">深度学习模型能够更好地捕捉症状与证型之间复杂的非线性关系，特别是在多标签分类任务中表现更佳。</p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <h3 className="font-semibold mb-2">自注意力机制的价值</h3>
                  <p className="text-sm">不仅提高了预测精度，更重要的是实现了模型的可解释性，能够量化每个症状对证型判断的贡献度（权重），这对于中医临床应用至关重要。</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
