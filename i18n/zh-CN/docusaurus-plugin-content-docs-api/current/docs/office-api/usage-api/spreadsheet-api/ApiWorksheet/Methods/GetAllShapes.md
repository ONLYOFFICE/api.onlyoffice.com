# GetAllShapes

返回当前工作表中的所有形状。

## 语法

```javascript
expression.GetAllShapes();
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiShape](../../ApiShape/ApiShape.md)[]

## 示例

检索电子表格工作表上放置的每个形状。

```javascript editor-xlsx
// How do I list all shapes on a sheet in a spreadsheet?

// Collect all drawn shapes from the worksheet to modify their content in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let gradientStop1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
let gradientStop2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
let fill = Api.CreateLinearGradientFill([gradientStop1, gradientStop2], 5400000);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let shapes = worksheet.GetAllShapes();
let content = shapes[0].GetContent();
content.RemoveAllElements();
shapes[0].SetVerticalTextAlign("bottom");
let paragraph = Api.CreateParagraph();
paragraph.SetJc("left");
paragraph.AddText("We removed all elements from the shape and added a new paragraph inside it ");
paragraph.AddText("aligning it vertically by the bottom.");
content.Push(paragraph);
```
