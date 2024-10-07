# MAKIBlog

MAKIBlog 是一个简洁、现代的个人博客系统，基于 Next.js 构建，支持 Markdown 文章编写，并具有响应式设计和暗色模式。

## 功能特点

- 响应式设计，适配桌面和移动设备
- 支持亮色/暗色主题切换
- Markdown 文章支持
- 文章搜索功能
- 自动计算文章阅读时间
- 代码块语法高亮
- 滚动到顶部/底部按钮

## 技术栈

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- MDX

## 本地开发

1. 克隆仓库：

   ```bash
   git clone https://github.com/your-username/makiblog.git
   cd makiblog
   ```

2. 安装依赖：

   ```bash
   npm install
   ```

3. 运行开发服务器：

   ```bash
   npm run dev
   ```

4. 在浏览器中打开 `http://localhost:3000` 查看博客。

## 部署到 Cloudflare Pages

1. 在 Cloudflare Pages 中创建新项目并连接到您的 GitHub 仓库。

2. 在构建设置中，设置：

   - 框架预设：`Next.js`
   - 构建命令：`npm run build`
   - 构建输出目录：`out`

3. 部署完成后，Cloudflare Pages 会提供一个 URL，您可以通过该 URL 访问您的博客。

## 自定义

- 文章存放在 `src/content` 目录下，以 Markdown 格式编写。
- 全局样式可以在 `src/styles/globals.css` 中修改。
- 主题配置可以在 `tailwind.config.js` 中调整。

## 贡献

欢迎提交 Issues 和 Pull Requests 来改进这个项目！

## 许可

本项目采用 MIT 许可证。详情请见 [LICENSE](LICENSE) 文件。
