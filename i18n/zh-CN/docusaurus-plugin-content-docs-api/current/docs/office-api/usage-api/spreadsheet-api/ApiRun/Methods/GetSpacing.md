# GetSpacing

从当前文本属性获取文本间距，以磅的二十分之一为单位。

Inherited from [ApiTextPr.GetSpacing](../../ApiTextPr/Methods/GetSpacing.md).

## 示例

此示例使用其属性获取文本间距。

```javascript editor-xlsx
// How to find out space size of a text.

// Get spacing size.

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

