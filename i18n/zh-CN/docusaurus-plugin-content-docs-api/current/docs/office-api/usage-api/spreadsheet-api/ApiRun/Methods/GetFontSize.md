# GetFontSize

从当前文本属性获取字体大小。

继承自 [ApiTextPr.GetFontSize](../../ApiTextPr/Methods/GetFontSize.md)。

## 示例

读取电子表格中分配给文本的字体大小。

```javascript editor-xlsx
// How do I find out what font size is used for text in a spreadsheet?

// Display the point size stored in a text style inside a shape in a spreadsheet.

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
textProps.SetFontSize(30);
paragraph = Api.CreateParagraph();
let fontSize = textProps.GetFontSize();
paragraph.AddText("Font size: " + fontSize);
content.Push(paragraph);
```
