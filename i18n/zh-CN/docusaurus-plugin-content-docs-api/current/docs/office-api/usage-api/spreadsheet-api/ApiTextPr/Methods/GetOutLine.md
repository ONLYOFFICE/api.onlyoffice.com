# GetOutLine

从当前文本属性获取文本轮廓。

## 语法

```javascript
expression.GetOutLine();
```

`expression` - 表示 [ApiTextPr](../ApiTextPr.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiStroke](../../ApiStroke/ApiStroke.md)

## 示例

读取电子表格中应用于文本的轮廓边框。

```javascript editor-xlsx
// How do I find out what outline is drawn around text in a spreadsheet?

// Inspect the border object assigned to a text style and display its type in a spreadsheet.

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
stroke = Api.CreateStroke(0.2 * 36000, Api.CreateSolidFill(Api.RGB(128, 128, 128)));
textProps.SetOutLine(stroke);
paragraph = Api.CreateParagraph();
stroke = textProps.GetOutLine();
let type = stroke.GetClassType();
paragraph.AddText("Text outline type: " + type);
content.Push(paragraph);
```
