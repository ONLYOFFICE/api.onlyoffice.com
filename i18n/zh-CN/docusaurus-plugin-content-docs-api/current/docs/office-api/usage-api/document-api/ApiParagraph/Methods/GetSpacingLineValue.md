# GetSpacingLineValue

返回段落行距值。

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

此示例展示如何获取段落行距值。

```javascript editor-docx
// How to get the spacing line value of the paragraph and display it.

// Get the paragraph spacing line value.

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
