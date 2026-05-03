---
title: Adding i18n into Fuwari
published: 2026-05-03
description: "How I took a beautiful, single-language Astro theme and engineered a complete, seamless bilingual (English/Chinese) system."
tags: ["Fuwari", "Astro", "Tutorial", "i18n"]
category: Tutorial
draft: false
series: Tutorial
lang: en
---

First, thanks to the developer and maintainers of [Fuwari](https://github.com/saicaca/fuwari) for creating this Astro theme.

::github{repo="saicaca/fuwari"}
::github{repo="yCENzh/Fuwari-yCENzh"}

When I decided to build my personal blog, I had two strict requirements: it needed to be blazing fast, and it needed to be natively **bilingual**.

I’m quite fond of Fuwari because the UI really suits my taste, the transitions are very smooth, and rich features. But...there was just one problem: **it was completely hard-coded for a single language.**

So now I have two options, giving up and using a minimalist documentation-style theme, or modify the existing theme to make it support i18n. I choosed the latter, and here is exactly how I did it.

## File-Based Routing

Astro uses file-based routing, which means the folder structure dictates the URLs. To create the bilingual experience, I adopted the "Global Prefix" strategy.

English is the default, so it should sit at the root, while Chinese content lives under a `/zh/` prefix.

To achieve this, I duplicated the main routing files:

- `src/pages/[...page].astro` (English Home)
- `src/pages/zh/[...page].astro` (Chinese Home)

I did the same for the archive, categories, and individual post routes (`[...slug].astro`).

## Isolating the Languages

With the routes set up, I needed to ensure English pages only showed English posts, and Chinese pages only showed Chinese posts.

I structured my Markdown files like this:

- `src/content/posts/Default/example.md` (English)
- `src/content/posts/zh/Default/example.md` (Chinese)

Then, I intercepted the theme's `getSortedPosts()` utility. By checking the URL pathname, I could filter the content on the fly:

```javascript
const lang = Astro.url.pathname.startsWith('/zh') ? 'zh' : 'en';
const allPosts = await getSortedPosts();
const filteredPosts = allPosts.filter(post => {
  const isZh = post.slug.startsWith('zh/');
  return lang === 'zh' ? isZh : !isZh;
});
```

I applied this logic to the Categories and Tags widgets as well, ensuring that the post counts were perfectly accurate for each language.

## Building a Language Switcher

We need to add a language switch option to the navigation bar. To make it look as native to the theme as possible, we need to replicate the hover animations and styles of other components.

The trickiest part wasn't the CSS—it was the URL calculation. I wrote a JavaScript handler that detects the exact current page and seamlessly swaps the user to the translated version of that **exact same post**.

```javascript title="LanguagePicker.astro"
// Calculate the exact URL at the moment of clicking
let newPath = window.location.pathname;
if (targetLang === 'zh' && !newPath.startsWith('/zh')) {
    newPath = '/zh' + (newPath === '/' ? '/' : newPath);
} else if (targetLang === 'en' && newPath.startsWith('/zh')) {
    newPath = newPath.slice(3) || '/';
}
```

## Battling the theme

I would say the hardest parts for me were dealing with the theme's advanced performance features, mainly because I don't write JavaScript a lot.

### Animation: Swup

The theme uses Swup for smooth, SPA-like page transitions. But because Swup only replaces the `<main>` content, clicking the language switcher left the Navbar stuck in the old language! The fix? Forcing a hard browser reload specifically for language switching:

```javascript title="LanguagePicker.astro" {7-8}
let newPath = window.location.pathname;
if (targetLang === 'zh' && !newPath.startsWith('/zh')) {
    newPath = '/zh' + (newPath === '/' ? '/' : newPath);
} else if (targetLang === 'en' && newPath.startsWith('/zh')) {
    newPath = newPath.slice(3) || '/';
}
// Force a full browser reload to the new language page
window.location.href = newPath;
```

### Architecture: Svelte

Astro uses [Island Architecture](https://docs.astro.build/en/concepts/islands/), basically it allows Astro supporting multiple UI frameworks with high performance. 

In Fuwari, some interactive components (like the theme color slider) are built with Svelte. Svelte runs in the browser and has no idea what `Astro.url` is, so we can't use it for language detection. To translate these widgets, I choose to pass the language from Astro to Svelte as a prop:

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

## Conclusion

Much of the text in Fuwari is hard-coded, so it required some refactoring, but the end result is excellent; at the very least, it satisfies my aesthetic preferences whilst providing support for bilingual.

In theory, as long as all modified sections are extracted separately, true internationalisation (i18n) can be implemented, and this should also improve maintainability. However, as I currently have no need for more than two languages, this approach is sufficient for now.

I’ve actually been thinking about setting up a personal blog for quite some time, and I’ve finally got round to it. Going forward, I may post articles here on dev, tech, learning, and various random topics.

welcome to my blog, and thanks for reading.

*Good morning, and in case I don't see you, good afternoon, good evening and good night.*