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

在文档中添加脚注并在其第一个段落中写入粗体文本。

```javascript editor-docx
// How do I access the first paragraph of each footnote to add formatted text in a document?

// Populate footnote content by writing directly to each footnote's opening paragraph in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0); 
paragraph.AddText("This is just a sample text.");
doc.AddFootnote();
let footnotesFirstParagraphs = doc.GetFootnotesFirstParagraphs();
footnotesFirstParagraphs[0].AddText("Footnote 1");
footnotesFirstParagraphs[0].SetBold(true);
```
