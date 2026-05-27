# GetSpacingLineValue

返回段落行距值。

## 语法

```javascript
expression.GetSpacingLineValue();
```

`expression` - 表示 [ApiParaPr](../ApiParaPr.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[twips](../../Enumeration/twips.md) \| [line240](../../Enumeration/line240.md) \| undefined

## 示例

读取应用于段落的行距值并在文档中显示。

```javascript editor-docx
// How do I get the line spacing value of a paragraph in a document?

// Confirm the exact spacing amount by printing the numeric line spacing value after setting triple-line spacing in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let paraPr = paragraph.GetParaPr();
paraPr.SetSpacingLine(3 * 240, "auto");
paragraph.AddText("Paragraph 1. Spacing: 3 times of a common paragraph line spacing.");
paragraph.AddLineBreak();
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddLineBreak();
let spacingLineValue = paraPr.GetSpacingLineValue();
paragraph.AddText("Spacing line value: " + spacingLineValue);
```
