# GetFootnotesFirstParagraphs

返回当前文档中所有脚注的第一个段落。

## 语法

```javascript
expression.GetFootnotesFirstParagraphs();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)[]

## 示例

此示例展示如何获取文档中所有脚注的首段。

```javascript editor-docx
// How to get the first footnote paragraph, add text to it and make it bold.

// Retrieve all footnote first paragraph for further manipulation.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0); 
paragraph.AddText("This is just a sample text.");
doc.AddFootnote();
let footnotesFirstParagraphs = doc.GetFootnotesFirstParagraphs();
footnotesFirstParagraphs[0].AddText("Footnote 1");
footnotesFirstParagraphs[0].SetBold(true);
```
