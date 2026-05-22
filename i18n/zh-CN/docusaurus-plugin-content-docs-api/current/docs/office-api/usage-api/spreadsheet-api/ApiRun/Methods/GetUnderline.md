# GetUnderline

从当前文本属性获取下划线属性。

继承自 [ApiTextPr.GetUnderline](../../ApiTextPr/Methods/GetUnderline.md)。

## 示例

检查电子表格中文本运行是否开启了下划线格式。

```javascript editor-xlsx
// How do I find out if text has an underline applied in a spreadsheet?

// Confirm the underline state of a text run by reading its formatting property in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
run.AddText("The text properties are changed and the style is added to the paragraph. ");
run.AddLineBreak();
paragraph.AddElement(run);
let textProps = run.GetTextPr();
textProps.SetUnderline(true);
paragraph = Api.CreateParagraph();
let isUnderline = textProps.GetUnderline();
paragraph.AddText("Underline property: " + isUnderline);
content.Push(paragraph);
```
