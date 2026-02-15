# 梅核气中医证型辨识与用药规律知识库网站部署指南

本指南将指导您如何将“梅核气中医证型辨识与用药规律知识库”网站部署到免费的科研或开发者托管平台。

## 推荐平台

1.  **GitHub Pages**：适合托管开源项目、学术主页，完全免费，稳定可靠。
2.  **Vercel**：操作极简，支持一键部署 React 应用，访问速度快，有免费额度。
3.  **Hugging Face Spaces**：适合展示 AI/机器学习项目，社区氛围好。

---

## 准备工作

1.  下载并解压提供的 `meiheqi-tcm-knowledge.zip` 文件。
2.  确保您的电脑上安装了 `Node.js` (推荐 v18 或更高版本) 和 `git`。
3.  注册一个 GitHub 账号（如果还没有）。

---

## 方案一：部署到 Vercel (推荐，最简单)

Vercel 是部署 React 应用的最佳选择之一，操作非常简单。

1.  **上传代码到 GitHub**：
    *   在 GitHub 上创建一个新的仓库（例如 `meiheqi-tcm-knowledge`）。
    *   在本地解压后的项目文件夹中打开终端（命令行）。
    *   执行以下命令将代码推送到 GitHub：
        ```bash
        git init
        git add .
        git commit -m "Initial commit"
        git branch -M main
        git remote add origin https://github.com/您的用户名/仓库名.git
        git push -u origin main
        ```

2.  **在 Vercel 上导入项目**：
    *   访问 [Vercel 官网](https://vercel.com/) 并使用 GitHub 账号登录。
    *   点击 "Add New..." -> "Project"。
    *   在 "Import Git Repository" 列表中找到您刚才创建的 GitHub 仓库，点击 "Import"。
    *   **配置**：
        *   Framework Preset: 选择 **Vite**。
        *   Root Directory: 保持默认 `./`。
        *   Build Command: `npm run build` (或 `pnpm build`)。
        *   Output Directory: `dist`。
    *   点击 "Deploy"。

3.  **完成**：
    *   等待几分钟，部署完成后，Vercel 会提供一个访问链接（例如 `https://meiheqi-tcm-knowledge.vercel.app`）。您可以将此链接放入您的论文中。

---

## 方案二：部署到 GitHub Pages

如果您希望完全依赖 GitHub，可以使用 GitHub Pages。

1.  **上传代码到 GitHub**（同方案一）。

2.  **配置 GitHub Pages**：
    *   进入您的 GitHub 仓库页面。
    *   点击 "Settings" -> "Pages"。
    *   在 "Source" 下选择 "GitHub Actions"。
    *   GitHub 会自动检测到这是一个 Vite 项目并建议使用相应的 Workflow。如果没有，您可以创建一个 `.github/workflows/deploy.yml` 文件，内容如下：

    ```yaml
    name: Deploy to GitHub Pages

    on:
      push:
        branches: [main]

    jobs:
      build:
        runs-on: ubuntu-latest
        steps:
          - uses: actions/checkout@v3
          - uses: pnpm/action-setup@v2
            with:
              version: 8
          - uses: actions/setup-node@v3
            with:
              node-version: 18
              cache: 'pnpm'
          - run: pnpm install
          - run: pnpm build
          - uses: actions/upload-pages-artifact@v1
            with:
              path: dist

      deploy:
        needs: build
        runs-on: ubuntu-latest
        permissions:
          pages: write
          id-token: write
        environment:
          name: github-pages
          url: ${{ steps.deployment.outputs.page_url }}
        steps:
          - name: Deploy to GitHub Pages
            id: deployment
            uses: actions/deploy-pages@v1
    ```

3.  **修改 `vite.config.ts`**：
    *   打开项目中的 `vite.config.ts` 文件。
    *   添加 `base` 配置项，值为您的仓库名：
        ```typescript
        export default defineConfig({
          base: '/仓库名/', // 例如 '/meiheqi-tcm-knowledge/'
          plugins: [react()],
          // ...
        })
        ```
    *   提交更改并推送到 GitHub。

4.  **完成**：
    *   GitHub Actions 会自动构建并部署。完成后，您的网站将在 `https://您的用户名.github.io/仓库名/` 上线。

---

## 方案三：部署到 Hugging Face Spaces

如果您希望在 AI 社区展示，Hugging Face Spaces 是个好选择。

1.  **创建 Space**：
    *   访问 [Hugging Face](https://huggingface.co/) 并登录。
    *   点击 "New Space"。
    *   输入 Space 名称（例如 `meiheqi-tcm-knowledge`）。
    *   Select the Space SDK: 选择 **Static**。
    *   点击 "Create Space"。

2.  **上传文件**：
    *   在本地项目文件夹中，执行构建命令生成静态文件：
        ```bash
        npm install
        npm run build
        ```
    *   这会生成一个 `dist` 文件夹。
    *   回到 Hugging Face Space 页面，点击 "Files" 标签页。
    *   点击 "Add file" -> "Upload files"。
    *   将本地 `dist` 文件夹中的**所有文件**（包括 `index.html`, `assets` 文件夹等）拖拽上传到 Space 的根目录。
    *   点击 "Commit changes to main"。

3.  **完成**：
    *   Hugging Face 会自动部署静态文件。您的网站将在 `https://huggingface.co/spaces/您的用户名/Space名称` 上线。

---

## 常见问题

*   **路由问题**：如果刷新页面出现 404 错误，这是因为单页应用（SPA）的路由机制。
    *   **Vercel**：会自动处理，无需额外配置。
    *   **GitHub Pages / Hugging Face**：可能需要创建一个 `404.html` 文件，内容与 `index.html` 相同，或者使用 HashRouter 代替 BrowserRouter（在 `App.tsx` 中修改）。

祝您的研究成果顺利发表！
