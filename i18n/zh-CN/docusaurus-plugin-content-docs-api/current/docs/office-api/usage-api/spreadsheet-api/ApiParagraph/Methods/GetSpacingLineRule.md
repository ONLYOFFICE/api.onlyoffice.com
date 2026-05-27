# GetSpacingLineRule

返回段落行距规则。

继承自 [ApiParaPr.GetSpacingLineRule](../../ApiParaPr/Methods/GetSpacingLineRule.md)。

## 示例

读取电子表格中应用于段落的行距规则。

```javascript editor-xlsx
// How do I find out whether a paragraph's line height is set to auto or a fixed rule in a spreadsheet?

// Verify the spacing mode of a paragraph after setting its line height to confirm the rule type in a spreadsheet.

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
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
let spacingLineValue = paraPr.GetSpacingLineValue();
paragraph = Api.CreateParagraph();
paragraph.AddText("Spacing line value : " + spacingLineValue);
content.Push(paragraph);
```
