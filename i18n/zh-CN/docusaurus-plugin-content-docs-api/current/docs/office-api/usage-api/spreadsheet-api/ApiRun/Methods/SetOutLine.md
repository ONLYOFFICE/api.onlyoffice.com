# SetOutLine

设置当前文本块的文本轮廓。

Inherited from [ApiTextPr.SetOutLine](../../ApiTextPr/Methods/SetOutLine.md).

## 示例

此示例设置当前文本块的文本轮廓

```javascript editor-xlsx
// How to outline a text with a stroke.

// Add text ouline using colored stroke.

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

