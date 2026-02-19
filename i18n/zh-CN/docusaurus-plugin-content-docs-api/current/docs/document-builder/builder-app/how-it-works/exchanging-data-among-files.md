---
sidebar_position: -2
---

# 文件间的数据交换

在处理文档时，经常需要在不同文档之间交换数据。例如，你可能需要打开某个文档，从中复制样式或某些数据值，关闭该文档后，创建一个新文档并将复制的数据粘贴进去，或者利用这些数据生成某种报告。

但是，一旦你关闭文件（使用 [CDocBuilder.CloseFile](../../builder-framework/C++/CDocBuilder/CloseFile.md) 方法），所有你处理过的变量数据都会失效并被清除，无法在其他文件中使用。

为了实现文件间的数据交换，引入了 *GlobalVariable*。

你需要做的是，在第一个打开或创建的文件中，使用 *GlobalVariable* 方法创建一个变量，例如：

``` ts
GlobalVariable["CommentsReport"] = oDocument.GetCommentsReport()
```

然后关闭该文档，打开或创建一个新文档，在新文档中就可以毫无问题地使用这个变量了，例如：

``` ts
const oCommentsReport = GlobalVariable["CommentsReport"]
```

下面的示例展示了如何使用 *GlobalVariable*。如需了解更多信息，请访问 [ApiDocument.GetCommentsReport](../../../office-api/usage-api/text-document-api/ApiDocument/Methods/GetCommentsReport.md) 和 [ApiDocument.GetReviewReport](../../../office-api/usage-api/text-document-api/ApiDocument/Methods/GetReviewReport.md) 部分。

## 示例

``` ts
builder.OpenFile("https://example.com/documentWithComments.docx")
const oDocument = Api.GetDocument()
GlobalVariable["CommentsReport"] = oDocument.GetCommentsReport()
builder.CloseFile()

builder.CreateFile("docx")
const oCommentsReport = GlobalVariable["CommentsReport"]
// 现在你可以在当前文档中使用来自上一个文档的 'CommentsReport' 变量了
builder.SaveFile("docx", "GetCommentsReport.docx")
builder.CloseFile()
```
