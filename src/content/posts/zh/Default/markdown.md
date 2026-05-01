---
title: Markdown 示例
published: 1001-10-01
description: 一个简单的 Markdown Blog 文章示例
tags: [Markdown, Blogging, Demo]
category: Default
draft: false
series: Examples
---

# 一级标题

段落之间用空行分隔。

第二段。*斜体*，**粗体**，和`等宽字体`。项目列表看起来像这样：

- 这一个
- 那一个
- 另一个

请注意 --- 不考虑星号 --- 实际文本内容从第4列开始。


> 引用块是这样写的。
> 
> 如果你愿意，它们可以跨越多段。


使用三个连字符表示长破折号。使用两个连字符表示范围（例如："都在12-14章"）。三个点...将被转换为省略号。支持Unicode。☺

## 二级标题

这是一个有序列表：

1. 第一项
2. 第二项
3. 第三项

再次注意实际文本如何从第4列开始（距左侧4个字符）。这是一个代码示例：

    # Let me re-iterate ...
    for i in 1 .. 10 { do-something(i) }


如你所料，缩进4个空格。顺便说一句，如果你愿意，可以使用定界块代替缩进块：

```
define foobar() {
    print "Welcome to flavor country!";
}
```

（这使得复制粘贴更容易）。你可以选择标记定界块以便Pandoc进行语法高亮：

```python
import time
# Quick, count to ten!
for i in range(10):
    # (but not *too* quick)
    time.sleep(0.5)
    print i
```

### 三级标题

现在是一个嵌套列表：

1. 首先，准备这些材料：

    - 胡萝卜
    - 芹菜
    - 扁豆

2. 烧开一些水。

3. 将所有东西倒入锅中，并按照以下算法操作：

        find wooden spoon
        uncover pot
        stir
        cover pot
        balance wooden spoon precariously on pot handle
        wait 10 minutes
        goto first step (or shut off burner when done)

    不要碰木勺，否则它会掉下来。


再次注意文本如何在4空格缩进处对齐（包括上面继续第3项的最后一行）。

这是一个指向[网站](http://foo.bar)的链接，指向[本地文档](local-doc.html)的链接，以及指向[当前文档中的章节标题](#an-h2-header)的链接。这是一个脚注[^1]。

[^1]: 脚注文本放在这里。

表格可以像这样：

size material color

---

9 leather brown
10 hemp canvas natural
11 glass transparent

表格：鞋子、尺寸及材质

（以上是表格的标题。）Pandoc也支持多行表格：

---

keyword text

---

red Sunsets, apples, and
other red or reddish
things.

green Leaves, grass, frogs
and other things it's
not easy being.

---

接下来是一条水平线。

---

这是一个定义列表：

苹果
: 适合做苹果酱。

橙子
: 柑橘类水果！

番茄
: "tomato"中没有"e"。

同样，文本缩进4个空格。（在每个术语/定义对之间加空行可以使内容更分散。）

这是一个"行块"：

| 第一行
| 第二行
| 第三行

图片可以这样指定：

[//]: # (![example image]&#40;./demo-banner.png "An exemplary image"&#41;)

行内数学公式这样插入：$\omega = d\phi / dt$。显示数学应独占一行并用双美元符号包围：

$$I = \int \rho R^{2} dV$$

$$
\begin{equation*}
\pi
=3.1415926535
 \;8979323846\;2643383279\;5028841971\;6939937510\;5820974944
 \;5923078164\;0628620899\;8628034825\;3421170679\;\ldots
\end{equation*}
$$

并且注意，你可以用反斜杠转义任何你想原样显示的标点字符，例如：\`foo\`, \*bar\*等。
