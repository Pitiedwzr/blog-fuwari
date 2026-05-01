---
title: Fuwari 简单指南
published: 1002-04-01
description: "如何使用这个 Blog 模板"
image: "./index.jpeg"
tags: ["Fuwari", "Blogging", "Customization"]
category: Default
draft: false
series: Examples
---

> 封面图片来源：[来源](https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/208fc754-890d-4adb-9753-2c963332675d/width=2048/01651-1456859105-(colour_1.5),girl,_Blue,yellow,green,cyan,purple,red,pink,_best,8k,UHD,masterpiece,male%20focus,%201boy,gloves,%20ponytail,%20long%20hair,.jpeg)

此博客模板使用 [Astro](https://astro.build/) 构建。对于本指南未提及的内容，您可以在 [Astro 文档](https://docs.astro.build/)中找到答案。

## 文章的前言配置(Front-matter)

```yaml
---
title: My First Blog Post
published: 2023-09-09
description: This is the first post of my new Astro blog.
image: ./cover.jpg
tags: [Foo, Bar]
category: Front-end
draft: false
---
```

| Attribute     | Description                                                                                            |
|---------------|--------------------------------------------------------------------------------------------------------|
| `title`       | 文章的标题。                                                                                                 |
| `published`   | 文章发布的日期。                                                                                               |
| `description` | 文章的简短描述。显示在索引页上。                                                                                       |
| `image`       | 1. 以 `http://` 或 `https://` 开头：使用网络图片<br/>2. 以 `/` 开头：指向 `public` 目录中的图片<br/>3. 无前缀：相对于 Markdown 文件的位置 |
| `tags`        | 文章的标签。                                                                                                 |
| `category`    | 文章的分类。                                                                                                 |
| `draft`       | 如果文章仍是草稿，则不会显示。                                                                                        |

## 文章文件的存放位置

您的文章文件应放置在 `src/content/posts/` 目录中。您也可以创建子目录以更好地组织文章和资源。

```
src/content/posts/
├── post-1.md
└── post-2/
    ├── cover.png
    └── index.md
```
