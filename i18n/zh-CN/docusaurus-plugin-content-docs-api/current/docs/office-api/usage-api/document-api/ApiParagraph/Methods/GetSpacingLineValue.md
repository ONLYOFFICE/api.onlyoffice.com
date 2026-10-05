# GetSpacingLineValue

返回段落行距值。

继承自 [ApiParaPr.GetSpacingLineValue](../../ApiParaPr/Methods/GetSpacingLineValue.md)。

## 语法

```javascript
expression.GetSpacingLineValue();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[twips](../../Enumeration/twips.md) \| [line240](../../Enumeration/line240.md) \| undefined

## 示例

读取文档中段落所应用的行距值。

```javascript editor-docx
// How do I get the numeric line spacing value of a paragraph in a document?

// Append the measured line spacing number to the paragraph to make it visible in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.SetSpacingLine(3 * 240, "auto");
paragraph.AddText("Paragraph 1. Spacing: 3 times of a common paragraph line spacing.");
paragraph.AddLineBreak();
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddLineBreak();
let spacingLineValue = paragraph.GetSpacingLineValue();
paragraph.AddText("Spacing line value: " + spacingLineValue);
```
