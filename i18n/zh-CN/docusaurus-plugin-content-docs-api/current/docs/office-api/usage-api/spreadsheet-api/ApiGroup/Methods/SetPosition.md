# SetPosition

更改绘图对象的位置。
💡 请注意，水平和垂直偏移量仅在指定的列和行单元格的限制范围内计算。
如果此值超出单元格宽度或高度，将设置另一个垂直/水平位置。

继承自 [ApiDrawing.SetPosition](../../ApiDrawing/Methods/SetPosition.md)。

## 示例

在电子表格中将绘图放置在相对于单元格的特定位置。

```javascript editor-xlsx
// How do I control exactly where a drawing appears in a spreadsheet?

// Reposition a shape by anchoring it to a chosen cell column and row in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
drawing.SetSize(120 * 36000, 70 * 36000);
drawing.SetPosition(0, 2 * 36000, 2, 3 * 36000);
```
