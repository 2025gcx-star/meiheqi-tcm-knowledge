import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [location] = useLocation();

  const links = [
    { href: "/", label: "首页" },
    { href: "/diagnosis", label: "证型辨识" },
    { href: "/patterns", label: "特征图谱" },
    { href: "/herbs", label: "用药规律" },
    { href: "/models", label: "模型性能" },
  ];

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/">
            <span className="mr-6 flex items-center space-x-2 cursor-pointer">
              <span className="hidden font-bold sm:inline-block">
                梅核气中医知识库
              </span>
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={cn(
                    "transition-colors hover:text-foreground/80 cursor-pointer",
                    location === link.href ? "text-foreground" : "text-foreground/60"
                  )}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </nav>
  );
}
