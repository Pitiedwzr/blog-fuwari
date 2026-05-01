---
title: Markdown 扩展功能
published: 1002-05-01
updated: 1002-11-29
description: '了解有关 Fuwari 中 Markdown 功能的更多信息'
tags: [Demo, Example, Markdown, Fuwari]
category: 'Default'
draft: false 
series: Examples
---

## GitHub 仓库卡片

您可以添加链接到 GitHub 仓库的动态卡片，页面加载时，仓库信息将从 GitHub API 获取。

::github{repo="saicaca/fuwari"}

使用代码 `::github{repo="<所有者>/<仓库名>"}` 创建 GitHub 仓库卡片。

```markdown
::github{repo="saicaca/fuwari"}
```

## 提示框

支持以下类型的提示框：`note`（说明）`tip`（技巧）`important`（重要）`warning`（警告）`caution`（注意）

:::note
突出显示用户应重视的信息，即使是在略读时。
:::

:::tip
帮助用户更成功的可选信息。
:::

:::important
用户成功所需的关键信息。
:::

:::warning
因潜在风险需要用户立即关注的关键内容。
:::

:::caution
行动可能带来的负面后果。
:::

### 基本语法

```markdown
:::note
Highlights information that users should take into account, even when skimming.
:::

:::tip
Optional information to help a user be more successful.
:::
```

### 自定义标题

提示框的标题可以自定义。

:::note[我的自定义标题]
这是一个带有自定义标题的说明框。
:::

```markdown
:::note[MY CUSTOM TITLE]
This is a note with a custom title.
:::
```

### GitHub 语法

> [!TIP]
> 也支持 [GitHub 语法](https://github.com/orgs/community/discussions/16925)。

```
> [!NOTE]
> The GitHub syntax is also supported.

> [!TIP]
> The GitHub syntax is also supported.
```

### 剧透

你可以给文本添加剧透效果。文本同样支持 Markdown 语法。

内容:spoiler[被隐藏了 **哎呀**]！

```markdown
内容:spoiler[被隐藏了 **哎呀**]！
```
