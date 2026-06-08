# SetSpacingLine

设置段落行距。如果 sLineRule 参数的值为
“atLeast” 或 “exact”，则 nLine 的值将被解释为磅的二十分之一。如果
sLineRule 参数的值为 “auto”，则
nLine 参数的值将被解释为行的 240 分之一。

继承自 [ApiParaPr.SetSpacingLine](../../ApiParaPr/Methods/SetSpacingLine.md)。

## 示例

在电子表格中加大形状内段落文本行之间的间距。

```javascript editor-xlsx
// How do I make a paragraph easier to read by spreading out its lines in a spreadsheet?

// Apply a triple line-height multiplier to loosen the vertical rhythm of paragraph text in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let paraPr = paragraph.GetParaPr();
paraPr.SetSpacingLine(3 * 240, "auto");
paragraph.AddText("Paragraph 1. Spacing: 3 times of a common paragraph line spacing.");
paragraph.AddLineBreak();
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
```
