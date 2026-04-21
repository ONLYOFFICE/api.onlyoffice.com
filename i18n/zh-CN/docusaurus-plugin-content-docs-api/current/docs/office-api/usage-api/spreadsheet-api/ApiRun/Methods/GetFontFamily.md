# GetFontFamily

从当前文本属性返回字体系列。
如果字体是通过主题设置的，此方法会自动从主题计算字体。

继承自 [ApiTextPr.GetFontFamily](../../ApiTextPr/Methods/GetFontFamily.md)。

## 示例

获取电子表格中文本的字体系列。

```javascript editor-xlsx
// How to find out a text font family in a spreadsheet.

// Get a text font family name and display it in the worksheet.

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
textProps.SetFontFamily("Arial");
paragraph = Api.CreateParagraph();
let fontFamily = textProps.GetFontFamily();
paragraph.AddText("Font family: " + fontFamily);
content.Push(paragraph);
```
