---
title: Link Cards Example
published: 1002-06-01
updated: 2026-05-02T00:00:00+00:00
description: Guide to using the link card feature.
tags: [Markdown, Blogging, Demo]
category: Default
draft: false
series: Examples
---

## About Link Cards

Link Cards are similar to the `<LinkCard>` component in [Starlight](https://starlight.astro.build), displaying links in a card format.  

## Usage
> This has now been updated; the method for calling it is as follows
### Customise title and description
```
::link-card{url="https://blog.pitiedwzr.workers.dev" title="Pitiedwzr's Blog" description="Ciallo~"}
```
::link-card{url="https://blog.pitiedwzr.workers.dev" title="Pitiedwzr's Blog" description="Ciallo~"}

### With image
```
::link-card{url="https://github.com" title="Github" description="Hello World!" icon="https://github.com/github.png"}
```
::link-card{url="https://github.com" title="Github" description="Hello World!" icon="https://github.com/github.png"}
