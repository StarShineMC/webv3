# StarShine 服务器网站

本项目为 StarShine Minecraft 服务器的官方网站。

## 项目结构

- **index.html**：Web 应用的入口。定义全局样式并通过 CDN 导入依赖。
- **index.tsx**：React 入口，渲染 App 组件。
- **App.tsx**：主布局组件，负责协调网站的各个区块。
- **constants.ts**：包含网站的所有静态数据（导航链接、团队成员、功能、社交链接）。编辑此文件可更改网站内容。
- **types.ts**：应用中使用的数据结构的 TypeScript 接口定义。
- **metadata.json**：项目元数据配置。

## 组件（/components）

- **Navbar.tsx**：页面顶部的粘性导航栏。
- **Hero.tsx**：首屏的大型“Hero”区块，包含背景图、服务器 IP 和复制按钮。
- **About.tsx**：展示“服务器功能”网格（实体服务器、跨平台等）。
- **Future.tsx**：展示“未来展望”区块，说明 Survival 和 RPG 模式的计划。
- **Team.tsx**：展示管理团队卡片。
- **Footer.tsx**：网站页脚，包含社交链接和版权信息。

## 技术栈

- React 19
- TypeScript
- Tailwind CSS（通过 CDN）
- Lucide React（图标）
