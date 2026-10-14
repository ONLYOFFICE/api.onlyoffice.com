# GetPosX

返回当前绘图对象在工作表上的 x 坐标位置。

继承自 [ApiDrawing.GetPosX](../../ApiDrawing/Methods/GetPosX.md)。

## 语法

```javascript
expression.GetPosX();
```

`expression` - 表示 [ApiSmartArt](../ApiSmartArt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[EMU](../../Enumeration/EMU.md)

## 示例

获取电子表格中形状的水平位置。

```javascript editor-xlsx
// How do I find the left edge coordinate of a drawing in a spreadsheet?

// Read and display the X position of a shape in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
drawing.SetPosition(2, 5 * 36000, 3, 2 * 36000);
let posX = drawing.GetPosX();
worksheet.GetRange("A1").SetValue("Drawing X position: " + posX + " EMU");
```
