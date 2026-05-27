---
sidebar_position: 4
---

# Sharing data between files

When working with multiple documents, you may need to transfer data between them - for example, copying styles, extracting values, or generating reports.

Once you close a file using [CloseFile](../builder-framework/CDocBuilder/CloseFile.md), all variables are cleared. To share data between files, use the global `GlobalVariable` object.

## Example

```js
// Open source document and extract comments
builderJS.OpenFile("documentWithComments.docx");
const oDocument = Api.GetDocument();
GlobalVariable["CommentsReport"] = oDocument.GetCommentsReport();
builderJS.CloseFile();

// Create new document and use the extracted data
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

For more information, see [ApiDocument.GetCommentsReport](../../office-api/usage-api/document-api/ApiDocument/Methods/GetCommentsReport.md) and [ApiDocument.GetReviewReport](../../office-api/usage-api/document-api/ApiDocument/Methods/GetReviewReport.md).
