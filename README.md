# 一航同学的博客

一个使用 Astro、Tailwind CSS 与 DaisyUI 构建的中文静态博客。网站包含文章、归档、标签和照片相册，并支持深色主题、文章分页与图片大图预览。

## 功能

- 文章列表、标签筛选和按月归档
- 前后翻页与当前页码提示
- Markdown 写作；支持在线图片和代码块
- 相册目录：一个 Markdown 文件管理一组照片
- 相册内瀑布流、懒加载与大图左右切换
- 文章图片大图预览
- DaisyUI `dark` 深色主题

## 本地运行

```bash
pnpm install
pnpm dev
```

默认开发地址为 `http://localhost:4321`。

生产构建：

```bash
pnpm build
pnpm preview
```

## 写文章

在 [src/content/blog](src/content/blog) 新建一个 `.md` 文件：

````md
---
title: "文章标题"
description: "文章摘要，用于文章列表。"
pubDate: "2026-09-02"
heroImage: "https://images.unsplash.com/..."
tags: ["随笔", "技术"]
---

这里是正文。

## 二级标题

```ts
console.log("支持代码块");
```
````

`heroImage` 仅用于文章列表封面；文章详情页不会显示它。文章列表每页默认显示 10 篇，超过后会自动生成下一页。

## 创建相册

在 [src/content/photos](src/content/photos) 新建一个 `.md` 文件，每个文件代表一个相册：

```md
---
title: "秋日散步"
description: "这组照片的简介。"
coverImage: "https://images.unsplash.com/..."
date: "2026-09-02"
location: "上海"
---

![照片说明](https://images.unsplash.com/...)

![另一张照片](https://images.unsplash.com/...)
```

`coverImage` 用于 `/photos/` 的相册卡片；正文中的图片会在相册详情页以瀑布流显示，并支持点击放大与左右切换。

## 目录结构

```text
src/
├── components/       # 通用组件
├── content/
│   ├── blog/         # 文章 Markdown
│   └── photos/       # 相册 Markdown
├── layouts/          # 页面布局
├── pages/            # 路由页面
└── config.ts         # 网站标题与描述
```

## 自定义

- 网站名称与描述：[src/config.ts](src/config.ts)
- 菜单：[src/components/SideBarMenu.astro](src/components/SideBarMenu.astro)
- 主题：[src/layouts/BaseLayout.astro](src/layouts/BaseLayout.astro)
- 头像与浏览器图标：[public/avatar.png](public/avatar.png)

## 技术栈

- [Astro](https://astro.build/)
- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
