# GetBold

从当前文本属性获取粗体属性。

继承自 [ApiTextPr.GetBold](../../ApiTextPr/Methods/GetBold.md)。

## 示例

检查电子表格中的文本是否格式化为粗体。

```javascript editor-xlsx
// How do I find out if text is bold in a spreadsheet?

// Read the bold setting from a text style and display the result in a spreadsheet.

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
textProps.SetBold(true);
paragraph = Api.CreateParagraph();
let isBold = textProps.GetBold();
paragraph.AddText("Bold property: " + isBold);
content.Push(paragraph);
```
