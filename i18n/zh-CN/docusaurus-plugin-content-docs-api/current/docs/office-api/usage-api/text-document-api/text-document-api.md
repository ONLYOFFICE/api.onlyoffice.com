---
sidebar_position: -5
---

# 文本文档 API

尽管文本文档由各种元素组成，但大多数元素相互嵌套，可以概括出三个主要元素：*段落*、*表格*和*块级内容控件*。所有其他元素都是这三个较大元素的一部分。

文本本身可以直接添加到段落、块级内容控件、行内文本内容控件、范围或表格单元格中，而表格单元格是表格结构的一部分。但是，为了方便起见（处理较小的块总是比处理较大的块更容易），文本通常被分成称为*文本片段*的小文本部分。每个段落可以仅由一个文本片段组成，也可以在其中包含数十个文本片段，这取决于段落的复杂性。

文本片段又包含文本本身和其他可以作为文本一部分的元素：*图像*、*形状*、*图表*。

除了文本片段之外，段落还可以包含*行内文本内容控件*和*超链接*。

表格的结构稍微复杂一些，因为它由*表格行*组成，而表格行又包含*表格单元格*。*表格单元格*内部可以包含完整的*段落*、*表格*或*块级内容控件*结构。

块级内容控件也可以在其内部包含*段落*、*表格*或另一个*块级内容控件*。

## 创建新的文本文档

使用 **ONLYOFFICE Document Builder** 可以通过以下代码构建一个包含居中"Center"文本的单段落的最简单示例文本文档：

``` ts
// create a text document file in the .docx format with ONLYOFFICE Document Builder
builder.CreateFile("docx")

// create a new 'oDocument' variable and get the created text document contents
const oDocument = Api.GetDocument()

// create a new paragraph
const oParagraph = Api.CreateParagraph()

// set the paragraph justification to center the text
oParagraph.SetJc("center")

// add a text containing a single 'Center' word to the paragraph
oParagraph.AddText("Center")

// push the created paragraph contents with the 'Center' word to the document
oDocument.Push(oParagraph)

// save the resulting text document as a file in the .docx format with the 'example.docx' name
builder.SaveFile("docx", "example.docx")

// close the text document file and finish work with ONLYOFFICE Document Builder
builder.CloseFile()
```

实际上，在上面的示例中，创建的文本文档将有两个段落，因为空文本文档默认会创建第一个段落，即新的空文本文档始终至少包含一个段落。您可以使用 *Api.GetElement(0)* 方法访问第一个段落来更改它，这样上面代码的第 4 行将如下所示：*oParagraph = oDocument.GetElement(0)*，并且不需要第 7 行（*oDocument.Push(oParagraph);*）。

## 打开现有的文本文档

如果您想编辑已存在的文本文档，可以使用 **ONLYOFFICE Document Builder** 打开它，获取其元素并根据需要进行更改。在这种情况下，与文档编辑器的唯一区别是您不需要文本文档编辑器。文档按以下方式打开：

``` ts
// use a path to an existing 'mydocument.docx' text document file to open it with ONLYOFFICE Document Builder
builder.OpenFile("https://example.com/mydocument.docx")

// create a new 'oDocument' variable and get the created text document contents
const oDocument = Api.GetDocument()

// get the contents of the document first paragraph
const oParagraph = oDocument.GetElement(0)

// set the paragraph justification to center the text
oParagraph.SetJc("center")

// add a text containing a single 'Center' word to the paragraph
oParagraph.AddText("Center")

// save the resulting text document as a file in the .docx format with a new 'example.docx' name
builder.SaveFile("docx", "example.docx")

// close the text document file and finish work with ONLYOFFICE Document Builder
builder.CloseFile()
```

如您所见，您只需使用 [CDocBuilder](../../../document-builder/builder-framework/CDocBuilder/CDocBuilder.md) 类的 *builder.OpenFile();* 方法，并将必要文本文档的路径作为参数传递即可打开它。在上面的示例中，我们打开 **mydocument.docx** 文档，获取其第一个段落并将其中的文本更改为居中的"Center"文本。同样的方式可以更改任何其他文本文档元素。

使用相应的 API 文档部分来了解哪些方法允许您更改某些文档和电子表格元素的格式属性。
