---
title: 链接卡片示例
published: 1002-06-01
updated: 2026-05-02T00:00:00+00:00
description: 链接卡片功能使用指南。
tags: [Markdown, Blogging, Demo]
category: Default
draft: false
series: Examples
---

## 关于链接卡片

链接卡片类似于 [Starlight](https://starlight.astro.build) 中的 `<LinkCard>` 组件，以卡片形式展示链接。

## 使用方法
> 现已更新,调用方法如下
### 自定义标题和描述
```
::link-card{url="https://blog.pitiedwzr.workers.dev" title="Pitiedwzr's Blog" description="Ciallo~"}
```
::link-card{url="https://blog.pitiedwzr.workers.dev" title="Pitiedwzr's Blog" description="Ciallo~"}

### 带图片
```
::link-card{url="https://github.com" title="Github" description="Hello World!" icon="https://github.com/github.png"}
```
::link-card{url="https://github.com" title="Github" description="Hello World!" icon="https://github.com/github.png"}
