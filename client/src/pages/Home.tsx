import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Loader2 } from "lucide-react";
import { Streamdown } from 'streamdown';

/**
 * All content in this page are only for example, replace with your own feature implementation
 * When building pages, remember your instructions in Frontend Best Practices, Design Guide and Common Pitfalls
 */
export default function Home() {
  // If theme is switchable in App.tsx, we can implement theme toggling like this:
  // const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col">
      <main>
        {/* Example: lucide-react for icons */}
        
        梅核气中医证型辨识与用药规律知识库
        {/* Example: Streamdown for markdown rendering */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 bg-card rounded-lg shadow-sm border">
            <h2 className="text-xl font-semibold mb-4">研究概览</h2>
            <p className="text-muted-foreground mb-4">
              基于302例真实临床数据，运用深度学习与自注意力机制，揭示梅核气的中医证型分布、关键辨识特征及用药规律。
            </p>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <span>样本量: 302例</span>
              <span>证型数: 5类</span>
              <span>核心算法: Self-Attention</span>
            </div>
          </div>
          
          <div className="p-6 bg-card rounded-lg shadow-sm border">
            <h2 className="text-xl font-semibold mb-4">核心功能</h2>
            <div className="space-y-3">
              <Link href="/diagnosis">
                <Button variant="outline" className="w-full justify-start">
                  🔍 交互式证型辨识
                </Button>
              </Link>
              <Link href="/patterns">
                <Button variant="outline" className="w-full justify-start">
                  📊 证型特征图谱
                </Button>
              </Link>
              <Link href="/herbs">
                <Button variant="outline" className="w-full justify-start">
                  💊 用药规律查询
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
      </main>
    </div>
  );
}
