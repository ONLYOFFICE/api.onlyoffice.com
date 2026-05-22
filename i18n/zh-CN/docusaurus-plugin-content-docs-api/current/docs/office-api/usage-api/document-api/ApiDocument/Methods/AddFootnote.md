# AddFootnote

为选定文本添加脚注（如果没有选区，则为当前位置添加）。

## 语法

```javascript
expression.AddFootnote();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiDocumentContent](../../ApiDocumentContent/ApiDocumentContent.md)

## 示例

在文档中为段落添加脚注。

```javascript editor-docx
// How do I attach a footnote to text in a document?

// Collect all footnote paragraphs and style the first one as bold in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0); 
paragraph.AddText("This is just a sample text.");
doc.AddFootnote();
let footnotesFirstParagraphs = doc.GetFootnotesFirstParagraphs();
footnotesFirstParagraphs[0].AddText("Footnote 1");
footnotesFirstParagraphs[0].SetBold(true);
```
