# GetIndRight

返回段落右侧缩进。

继承自 [ApiParaPr.GetIndRight](../../ApiParaPr/Methods/GetIndRight.md)。

## 语法

```javascript
expression.GetIndRight();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[twips](../../Enumeration/twips.md) \| undefined

## 示例

读取文档中段落设置的右缩进值。

```javascript editor-docx
// How do I find out how much a paragraph is indented from the right margin in a document?

// Confirm a programmatically applied right indent by reading it back in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the right offset of 2 inches set to it. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
paragraph.SetJc("right");
paragraph.SetIndRight(2880);
let indRight = paragraph.GetIndRight();
paragraph = Api.CreateParagraph();
paragraph.AddText("Right indent: " + indRight);
doc.Push(paragraph);
```
