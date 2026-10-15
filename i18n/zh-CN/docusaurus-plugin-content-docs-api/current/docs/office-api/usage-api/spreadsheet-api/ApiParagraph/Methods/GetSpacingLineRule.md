# GetSpacingLineRule

返回段落行距规则。

继承自 [ApiParaPr.GetSpacingLineRule](../../ApiParaPr/Methods/GetSpacingLineRule.md)。

## 语法

```javascript
expression.GetSpacingLineRule();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"auto" \| "atLeast" \| "exact" \| undefined

## 示例

在电子表格中读取控制段落内行距的规则。

```javascript editor-xlsx
// How do I find out which line spacing mode is applied to a paragraph in a spreadsheet?

// Confirm the line spacing rule of a paragraph after setting it to a custom value in a spreadsheet.

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
let spacingRule = paragraph.GetSpacingLineRule();
paragraph.AddText("Spacing line rule: " + spacingRule);
```
