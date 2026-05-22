# SetIndFirstLine

设置段落首行缩进。

继承自 [ApiParaPr.SetIndFirstLine](../../ApiParaPr/Methods/SetIndFirstLine.md)。

## 示例

在电子表格中缩进形状内段落的第一行。

```javascript editor-xlsx
// How do I push in just the opening line of a paragraph in a spreadsheet?

// Control the first-line indent separately from the rest of the paragraph text in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let paraPr = paragraph.GetParaPr();
paraPr.SetIndFirstLine(1440);
paragraph.AddText("This is the first paragraph with the indent of 1 inch set to the first line. ");
paragraph.AddText("This indent is set by the paragraph style. No paragraph inline style is applied. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
```
