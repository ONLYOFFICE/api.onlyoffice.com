# SetOutLine

设置当前文本块的文本轮廓。

继承自 [ApiTextPr.SetOutLine](../../ApiTextPr/Methods/SetOutLine.md)。

## 示例

在电子表格中为形状内的文本应用彩色轮廓。

```javascript editor-xlsx
// How do I add a visible border around text characters in a spreadsheet?

// Give text a distinct look by surrounding each letter with a stroke in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let run = Api.CreateRun();
let textProps = run.GetTextPr();
textProps.SetFontSize(30);
stroke = Api.CreateStroke(0.2 * 36000, Api.CreateSolidFill(Api.RGB(128, 128, 128)));
textProps.SetOutLine(stroke);
paragraph.SetJc("left");
run.AddText("This is a text run with the gray text outline set using the text properties.");
paragraph.AddElement(run);
```
