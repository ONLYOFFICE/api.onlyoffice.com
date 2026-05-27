---
sidebar_position: 4
---

# 在文件之间共享数据

在处理多个文档时，您可能需要在文档之间传输数据——例如，复制样式、提取值或生成报告。

使用 [CloseFile](../builder-framework/CDocBuilder/CloseFile.md) 关闭文件后，所有变量都会被清除。要在文件之间共享数据，请使用全局 `GlobalVariable` 对象。

## 示例

```js
// 打开源文档并提取批注
builderJS.OpenFile("documentWithComments.docx");
const oDocument = Api.GetDocument();
GlobalVariable["CommentsReport"] = oDocument.GetCommentsReport();
builderJS.CloseFile();

// 创建新文档并使用提取的数据
builderJS.CreateFile("docx");
const oNewDocument = Api.GetDocument();
const oParagraph = oNewDocument.GetElement(0);
const commentsReport = GlobalVariable["CommentsReport"];

for (const author in commentsReport) {
    oParagraph.AddText("Author: " + author);
    oParagraph.AddLineBreak();
}

builderJS.SaveFile("docx", "CommentsReport.docx");
builderJS.CloseFile();
```

有关更多信息，请参阅 [ApiDocument.GetCommentsReport](../../office-api/usage-api/document-api/ApiDocument/Methods/GetCommentsReport.md) 和 [ApiDocument.GetReviewReport](../../office-api/usage-api/document-api/ApiDocument/Methods/GetReviewReport.md)。
