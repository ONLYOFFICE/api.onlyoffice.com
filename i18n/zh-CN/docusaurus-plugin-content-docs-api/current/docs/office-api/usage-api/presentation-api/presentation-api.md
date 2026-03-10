---
sidebar_position: -3
---

# 演示文稿 API

演示文稿文档的结构比文本文档更简单，大多数演示文稿元素都嵌套在*幻灯片*元素中，所有其他元素都放置在其上。单个或多个*幻灯片*元素是*演示文稿*元素的一部分。

如果您需要所有幻灯片包含相同的字体和图像，应使用*幻灯片母版*。它由与*幻灯片*相同的元素组成。

可以将*布局*添加到*幻灯片*以指定其结构。此外，一些绘图对象 - *图像*、*形状*、*图表* - 可以直接放置到*幻灯片*或幻灯片*布局*中。*占位符*元素可以添加到*形状*中。

文本不能直接放置到*幻灯片*中，它只能分组到*段落*中并添加到*形状*或*表格*中。为了方便起见（处理较小的块总是比处理较大的块更容易），文本通常被分成称为*文本片段*的小文本部分。每个段落可以仅由一个文本片段组成，也可以在其中包含数十个文本片段，这取决于段落的复杂性。

## 创建新的演示文稿

使用 **ONLYOFFICE Document Builder** 可以通过以下代码构建一个包含单个空白幻灯片的最简单示例演示文稿：

``` ts
// create a presentation file in the .pptx format with ONLYOFFICE Document Builder
builder.CreateFile("pptx")

// create a new 'oPresentation' variable and get the created presentation contents
const oPresentation = Api.GetPresentation()

// get the first slide
const oSlide = oPresentation.GetSlideByIndex(0)

// remove all objects from the first slide
oSlide.RemoveAllObjects()

// save the resulting presentation as a file in the .pptx format with a new 'example.pptx' name
builder.SaveFile("pptx", "example.pptx")

// close the presentation file and finish work with ONLYOFFICE Document Builder
builder.CloseFile()
```

## 打开现有的演示文稿

如果您想编辑已存在的演示文稿，可以使用 **ONLYOFFICE Document Builder** 打开它，获取其元素并根据需要进行更改。在这种情况下，与演示文稿编辑器的唯一区别是您不需要演示文稿编辑器。演示文稿按以下方式打开：

``` ts
// use a path to an existing 'mypresentation.pptx' presentation file to open it with ONLYOFFICE Document Builder
builder.OpenFile("https://example.com/mypresentation.pptx")

// create a new 'oPresentation' variable and get the created presentation contents
const oPresentation = Api.GetPresentation()

// get the first slide
const oSlide = oPresentation.GetSlideByIndex(0)

// remove all objects from the first slide
oSlide.RemoveAllObjects()

// save the resulting presentation as a file in the .pptx format with a new 'example.pptx' name
builder.SaveFile("pptx", "example.pptx")

// close the presentation file and finish work with ONLYOFFICE Document Builder
builder.CloseFile()
```

如您所见，您只需使用 [CDocBuilder](../../../document-builder/builder-framework/C++/CDocBuilder/CDocBuilder.md) 类的 *builder.OpenFile();* 方法，并将必要演示文稿的路径作为参数传递即可打开它。在上面的示例中，我们打开 **mypresentation.pptx** 演示文稿，获取其第一张幻灯片并删除其中的所有对象。同样的方式可以更改任何其他演示文稿元素。

使用相应的 API 文档部分来了解哪些方法允许您更改某些文档和演示文稿元素的格式属性。
