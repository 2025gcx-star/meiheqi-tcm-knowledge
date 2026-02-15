import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve static files from public directory (if needed)
// 注意：静态文件最好由 Vercel 直接托管，这里可以注释掉或保留
const staticPath = path.resolve(__dirname, "../dist/public"); // 假设构建输出在 dist/public
app.use(express.static(staticPath));

// Handle client-side routing - serve index.html for all non-API routes
app.get("*", (_req, res) => {
  res.sendFile(path.join(staticPath, "index.html"));
});

// Export the Express app as a serverless function
export default app;
