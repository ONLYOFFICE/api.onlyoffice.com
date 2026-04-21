# GetCaps

返回具有当前文本属性的文本是否大写。

继承自 [ApiTextPr.GetCaps](../../ApiTextPr/Methods/GetCaps.md)。

## 示例

获取电子表格中文本的大写属性。

```javascript editor-xlsx
// How to find out whether a text is capitalized or not in a spreadsheet.

// Get a text capitalized property in a spreadsheet.

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
textProps.SetCaps(true);
paragraph = Api.CreateParagraph();
let isCaps = textProps.GetCaps();
paragraph.AddText("Property of the capitalized letters: " + isCaps);
content.Push(paragraph);
```
