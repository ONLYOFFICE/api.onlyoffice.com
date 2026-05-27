# GetFlipV

获取当前绘图的垂直翻转状态。

## 语法

```javascript
expression.GetFlipV();
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean \| null

## 示例

读取电子表格中绘图的垂直翻转状态。

```javascript editor-xlsx
// How do I find out whether a drawing is mirrored top to bottom in a spreadsheet?

// Confirm whether a shape has been reversed along its horizontal axis in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = worksheet.AddShape("cube", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
drawing.SetFlipV(true);
let flip = drawing.GetFlipV();
worksheet.SetColumnWidth(0, 25);
worksheet.GetRange("A1").SetValue("Drawing is flipped vertically: " + flip);
```
