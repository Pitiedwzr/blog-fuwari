---
title: 为 Fuwari 添加 i18n 支持
published: 2026-05-03
description: "如何使一个美观但仅支持单语的Astro主题，变为一个完整且无缝衔接的双语（英语/中文）主题"
tags: ["Fuwari", "Astro", "Tutorial", "i18n"]
category: Tutorial
draft: false
series: Tutorial
lang: zh-CN
---

首先，感谢 [Fuwari](https://github.com/saicaca/fuwari) 的开发者和维护者创建了这个精美的Astro主题。

::github{repo="saicaca/fuwari"}
::github{repo="yCENzh/Fuwari-yCENzh"}

在我决定搭建一个基于 Astro 的个人博客的时候，对于主题的选择，我有两个要求：足够快，并且原生支持**双语**。

我蛮喜欢 Fuwari 的，因为 UI 很符合我的审美、页面切换也很流畅、以及功能丰富。但是……有一个问题：**它的界面完全是针对中文硬编码的。**

所以我有两个选择，要么放弃 Fuwari 然后用一个极简风格的主题，要么对 Fuwari 进行修改使它支持多语言。我选择了后者，下面就详细介绍我是如何做到的：

## 基于文件的路由

Astro 使用的是基于文件的路由，意味着文件夹的结构表示着 URL。为了支持两种语言，我使用了“全局前缀”的策略。

英语作为默认的语言应该在根目录下, 而中文内容则位于 `/zh/` 前缀下。

为了实现这一点，我复制了主要的路由文件：

- `src/pages/[...page].astro` (英文主页)
- `src/pages/zh/[...page].astro` (中文主页)

对时间线、分类和单篇博文的路由（`[...slug].astro`）也做同样的处理。

## 隔离语言

配置路由后，我需要确保英文页面只应该显示英文文章，而中文页面只显示中文文章。

按以下结构放置 Markdown 文件：

- `src/content/posts/Default/example.md` (英文)
- `src/content/posts/zh/Default/example.md` (中文)

然后拦截主题的 `getSortedPosts()` 辅助函数，通过检查 URL 路径来过滤语言：

```javascript
const lang = Astro.url.pathname.startsWith('/zh') ? 'zh' : 'en';
const allPosts = await getSortedPosts();
const filteredPosts = allPosts.filter(post => {
  const isZh = post.slug.startsWith('zh/');
  return lang === 'zh' ? isZh : !isZh;
});
```

之后再将这一逻辑应用到“分类”和“标签”组件上，这样每种语言的组件都只显示对应语言的文章。

## 构建语言切换器

我们需要在导航栏中添加语言切换选项，为了尽量看起来是主题原生的，需要仿照其他组件的悬停动画和样式。

比起 CSS，最麻烦的部分其实是 URL 计算。可以用 JS 来检测当前页面的准确位置，并无缝切换到同一篇文章的另一个语言：

```javascript title="LanguagePicker.astro"
// 点击时计算准确的 URL
let newPath = window.location.pathname;
if (targetLang === 'zh' && !newPath.startsWith('/zh')) {
    newPath = '/zh' + (newPath === '/' ? '/' : newPath);
} else if (targetLang === 'en' && newPath.startsWith('/zh')) {
    newPath = newPath.slice(3) || '/';
}
```

## 和主题斗争

对我来说，最难的部分是处理 Fuwari 利用到的高级功能，好吧，主要是因为我平时很少写 JavaScript。

### 动画：Swup

主题使用了 Swup 进行平滑的 SPA 式的过渡，但 Swup 在过渡时只替换 `<main>` 的内容，点击语言切换会让导航栏停留在之前的语言。当然也很好解决——在语言切换时强制刷新页面就好：

```javascript title="LanguagePicker.astro" {7-8}
let newPath = window.location.pathname;
if (targetLang === 'zh' && !newPath.startsWith('/zh')) {
    newPath = '/zh' + (newPath === '/' ? '/' : newPath);
} else if (targetLang === 'en' && newPath.startsWith('/zh')) {
    newPath = newPath.slice(3) || '/';
}
// 强制浏览器完全刷新并跳转至新语言页面
window.location.href = newPath;
```

### 架构：Svelte

Astro 使用了 [孤岛架构](https://docs.astro.build/en/concepts/islands/)，总之，它使 Astro 能够以高性能支持多种 UI 框架。

在 Fuwari 中, 部分可交互的组件（比如主题色更改滑块）使用了 Svelte 构建. 但是 Svelte 在浏览器中运行并且没办法调用 `Astro.url`，所以不能这样来检测语言。不过，想要翻译这些组件，可以将语言作为属性从 Astro 传递给 Svelte：

```javascript title="NavBar.astro"
<DisplaySettings client:only="svelte" lang={lang} />
```
```svelte title="DisplaySettings.svelte"
<script>
    ...
    export let lang: string = 'en';
    ...
</script>
```

## 总结

Fuwari 中有不少的文字都是硬编码的，所以需要很多重写，但最终的结果还是很好的，至少在满足我的审美的同时做到了双语言支持。

现在撰写文章只需将 `.md` 文件放入根目录，并将对应的中文版本放到 `/zh/` 目录就可以了。Astro 会自动处理剩下的琐事——路由、分类、上一篇/下一篇文章的链接以及界面翻译。

其实一直都有想建个个人博客的念头，这也算是终于实施了，之后可能会发关于开发、技术和学习的文章。

感谢阅读，欢迎光临我的博客！

祝你早安，午安，晚安。