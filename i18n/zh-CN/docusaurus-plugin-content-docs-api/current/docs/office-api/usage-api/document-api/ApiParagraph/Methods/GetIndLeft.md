# GetIndLeft

返回段落左侧缩进。

继承自 [ApiParaPr.GetIndLeft](../../ApiParaPr/Methods/GetIndLeft.md)。

## 语法

```javascript
expression.GetIndLeft();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[twips](../../Enumeration/twips.md) \| undefined

## 示例

读取文档中段落设置的左缩进值。

```javascript editor-docx
// How do I find out how much a paragraph is indented from the left margin in a document?

// Confirm a programmatically applied left indent by reading it back in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the indent of 2 inches set to it. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
paragraph.SetIndLeft(2880);
let indLeft = paragraph.GetIndLeft();
paragraph = Api.CreateParagraph();
paragraph.AddText("Left indent: " + indLeft);
doc.Push(paragraph);
```
