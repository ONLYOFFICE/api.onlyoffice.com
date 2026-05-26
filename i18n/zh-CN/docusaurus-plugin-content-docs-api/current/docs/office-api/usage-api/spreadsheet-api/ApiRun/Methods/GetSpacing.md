# GetSpacing

从当前文本属性获取文本间距，以磅的二十分之一为单位。

继承自 [ApiTextPr.GetSpacing](../../ApiTextPr/Methods/GetSpacing.md)。

## 示例

读取电子表格中应用于文本运行的字符间距值。

```javascript editor-xlsx
// How do I find out how much spacing is set between characters in a spreadsheet?

// Retrieve the letter-spacing amount to verify text appearance in a spreadsheet.

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
textProps.SetSpacing(80);
paragraph = Api.CreateParagraph();
let spacing = textProps.GetSpacing();
paragraph.AddText("Text spacing: " + spacing);
content.Push(paragraph);
```
