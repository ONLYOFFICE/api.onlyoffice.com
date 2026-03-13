---
sidebar_position: -2
---

# 表单 API

表单文档的结构与[文本文档](../text-document-api/text-document-api.md)完全相同。唯一的区别是新的*表单*实体与其他段落元素一起放置 - 文本片段、行内文本内容控件和超链接。共有七种表单类型：*文本字段*、*组合框*、*下拉列表*、*复选框*、*单选按钮*、*图片表单*和*复合字段*。

## 创建新的表单文档

要创建表单文档，必须使用带有 *"pdf"* 扩展名的 [CreateFile](../../../document-builder/builder-framework/CDocBuilder/CreateFile.md) 方法。

要将准备好的文档保存为表单，需要使用带有 *"pdf"* 扩展名的 [SaveFile](../../../document-builder/builder-framework/CDocBuilder/SaveFile.md) 方法。

使用 **ONLYOFFICE Document Builder** 可以通过以下代码构建一个包含"John Smith"文本的单个文本表单的最简单示例表单文档：

``` ts
// create a form document file in the .pdf format with ONLYOFFICE Document Builder
builder.CreateFile("pdf")

// create a new 'oDocument' variable and get the created text document contents
const oDocument = Api.GetDocument()

// create an empty text form
const oTextForm = Api.CreateTextForm()

// get the first empty paragraph from the created document
const oParagraph = oDocument.GetElement(0)

// add the created text form to the first paragraph
oParagraph.AddElement(oTextForm)

// add the "John Smith" text to the text form
oTextForm.SetText("John Smith")

// save the resulting form document as a file in the .pdf format with the 'example.pdf' name
builder.SaveFile("pdf", "example.pdf")

// close the form document file and finish work with ONLYOFFICE Document Builder
builder.CloseFile()
```

## 打开现有的表单文档

如果您想编辑已存在的表单文档，可以使用 **ONLYOFFICE Document Builder** 打开它，获取其元素并根据需要进行更改。在这种情况下，与文档编辑器的唯一区别是您不需要文档编辑器。文档按以下方式打开：

``` ts
// use a path to an existing 'myformdocument.pdf' form document file to open it with ONLYOFFICE Document Builder
builder.OpenFile("https://example.com/myformdocument.pdf")

// create a new 'oDocument' variable and get the created text document contents
const oDocument = Api.GetDocument()

// create an empty text form
const oTextForm = Api.CreateTextForm()

// get the first empty paragraph from the created document
const oParagraph = oDocument.GetElement(0)

// add the created text form to the first paragraph
oParagraph.AddElement(oTextForm)

// add the "John Smith" text to the text form
oTextForm.SetText("John Smith")

// save the resulting form document as a file in the .pdf format with the 'example.pdf' name
builder.SaveFile("pdf", "example.pdf")

// close the form document file and finish work with ONLYOFFICE Document Builder
builder.CloseFile()
```

如您所见，您只需使用 [CDocBuilder](../../../document-builder/builder-framework/CDocBuilder/CDocBuilder.md) 类的 *builder.OpenFile();* 方法，并将必要表单文档的路径作为参数传递即可打开它。在上面的示例中，我们打开 **myformdocument.pdf** 文档，获取其第一个段落并向其中添加带有"John Smith"文本的文本表单。同样的方式可以更改任何其他表单文档元素。

使用相应的 API 文档部分来了解哪些方法允许您更改某些文档和电子表格元素的格式属性。
