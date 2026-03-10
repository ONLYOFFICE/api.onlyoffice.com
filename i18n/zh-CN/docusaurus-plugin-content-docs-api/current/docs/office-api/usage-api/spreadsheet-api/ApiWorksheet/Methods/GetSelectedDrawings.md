# GetSelectedDrawings

返回当前工作表中选定的绘图。

## 语法

```javascript
expression.GetSelectedDrawings();
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[Drawing](../../Enumeration/Drawing.md)[]

## 示例

This example shows how to get selected drawings from the sheet.

```javascript editor-xlsx
// How to get seletectd drawings.

// Get selected drawings as an array.

let worksheet = Api.GetActiveSheet();
let gradientStop1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
let gradientStop2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
let fill = Api.CreateLinearGradientFill([gradientStop1, gradientStop2], 5400000);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
gradientStop1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 0, 0), 0);
gradientStop2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 0, 255), 100000);
fill = Api.CreateLinearGradientFill([gradientStop1, gradientStop2], 5400000);
stroke = Api.CreateStroke(0, Api.CreateNoFill());
let image = worksheet.AddImage("https://static.onlyoffice.com/assets/docs/samples/img/presentation_sky.png", 60 * 36000, 35 * 36000, 10, 2 * 36000, 5, 3 * 36000);
shape.Select();
image.Select();
let shapes = worksheet.GetSelectedDrawings();
shapes.forEach(function(shape) {
	shape.SetRotation(45);
});

```
