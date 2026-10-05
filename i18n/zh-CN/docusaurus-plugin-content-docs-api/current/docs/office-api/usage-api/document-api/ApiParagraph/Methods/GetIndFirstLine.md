# GetIndFirstLine

返回段落首行缩进。

继承自 [ApiParaPr.GetIndFirstLine](../../ApiParaPr/Methods/GetIndFirstLine.md)。

## 语法

```javascript
expression.GetIndFirstLine();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[twips](../../Enumeration/twips.md) \| undefined

## 示例

读取文档中段落设置的首行缩进值。

```javascript editor-docx
// How do I find out how far the first line of a paragraph is indented in a document?

// Verify a programmatically applied first-line indent by reading it back in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the indent of 1 inch set to the first line. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
paragraph.SetIndFirstLine(1440);
let indFirstLine = paragraph.GetIndFirstLine();
paragraph = Api.CreateParagraph();
paragraph.AddText("First line indent: " + indFirstLine);
doc.Push(paragraph);
```
