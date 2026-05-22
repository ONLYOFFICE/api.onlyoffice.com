# SetJc

设置段落内容对齐方式。

继承自 [ApiParaPr.SetJc](../../ApiParaPr/Methods/SetJc.md)。

## 示例

在电子表格中将形状内的段落文本居中对齐。

```javascript editor-xlsx
// How do I change the horizontal alignment of a paragraph in a spreadsheet?

// Control whether paragraph text snaps to the left, right, center, or stretches across the full width in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let paraPr = paragraph.GetParaPr();
paraPr.SetJc("center");
paragraph.AddText("This is a paragraph with the text in it aligned by the center. ");
paragraph.AddText("The justification is specified in the paragraph style. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
```
