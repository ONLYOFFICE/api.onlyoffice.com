# GetSmallCaps

返回具有当前文本属性的文本是否显示为比实际字体大小小两磅的大写字母。

继承自 [ApiTextPr.GetSmallCaps](../../ApiTextPr/Methods/GetSmallCaps.md)。

## 示例

获取电子表格中文本的大写属性。

```javascript editor-xlsx
// How to find out whether a text is uncapitalized or not in a spreadsheet.

// Find whether a text characters are in small caps or not in a spreadsheet.

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
textProps.SetSmallCaps(true);
paragraph = Api.CreateParagraph();
let isSmallCaps = textProps.GetSmallCaps();
paragraph.AddText("Property of the small capitalized letters: " + isSmallCaps);
content.Push(paragraph);
```
