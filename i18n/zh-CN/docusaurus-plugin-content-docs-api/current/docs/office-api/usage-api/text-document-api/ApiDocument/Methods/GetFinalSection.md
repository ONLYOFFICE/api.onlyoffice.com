# GetFinalSection

返回文档的最后一节。

## 语法

```javascript
expression.GetFinalSection();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiSection](../../ApiSection/ApiSection.md)

## 示例

此示例展示如何获取文档的最后一节。

```javascript editor-docx
// How to get the last section of the document.

// Update the header of the final section.

let doc = Api.GetDocument();
let section = doc.GetFinalSection();
let header = section.GetHeader("default", true);
let paragraph = header.GetElement(0);
paragraph.AddText("This is the text in the default header");
let textPr = doc.GetDefaultTextPr();
textPr.SetFontSize(22);
textPr.SetLanguage("en-US");
textPr.SetFontFamily("Calibri");
let paraPr = doc.GetDefaultParaPr();
paraPr.SetSpacingLine(276, "auto");
paraPr.SetSpacingAfter(200);
paragraph = doc.GetElement(0);
paragraph.AddText("This is a text in a paragraph.");
```
