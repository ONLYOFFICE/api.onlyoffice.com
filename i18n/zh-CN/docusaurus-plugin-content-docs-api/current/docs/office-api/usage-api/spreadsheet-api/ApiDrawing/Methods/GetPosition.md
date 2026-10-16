# GetPosition

返回当前绘图对象的单元格锚点；偏移量受锚点单元格限制。

## 语法

```javascript
expression.GetPosition();
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[DrawingCellAnchor](../../Enumeration/DrawingCellAnchor.md) \| null

## 示例

读取电子表格中绘图对象的单元格锚点。

```javascript editor-xlsx
// How do I check where a shape was placed after SetPosition in a spreadsheet?

// Get the anchor column, row and offsets of a shape and display them in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
drawing.SetPosition(2, 5 * 36000, 3, 2 * 36000);
let position = drawing.GetPosition();
worksheet.GetRange("A1").SetValue("Column: " + position.fromCol + ", offset: " + position.colOffset);
worksheet.GetRange("A2").SetValue("Row: " + position.fromRow + ", offset: " + position.rowOffset);
```
