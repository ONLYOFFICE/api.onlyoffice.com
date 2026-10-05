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

在电子表格中读取形状内段落的行距数值。

```javascript editor-xlsx
// How do I check the exact line height set for a paragraph in a spreadsheet?

// Confirm the line spacing amount after applying a custom multiplier to a paragraph in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 80 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
paragraph.SetSpacingLine(3 * 240, "auto");
paragraph.AddText("Paragraph 1. Spacing: 3 times of a common paragraph line spacing.");
paragraph.AddLineBreak();
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddLineBreak();
let spacingValue = paragraph.GetSpacingLineValue();
paragraph.AddText("Spacing line value: " + spacingValue);
```
