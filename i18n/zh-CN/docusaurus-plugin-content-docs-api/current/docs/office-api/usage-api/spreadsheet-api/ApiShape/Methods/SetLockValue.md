# SetLockValue

设置当前绘图的指定锁定类型的锁定值。

继承自 [ApiDrawing.SetLockValue](../../ApiDrawing/Methods/SetLockValue.md)。

## 示例

在电子表格中为当前绘图对象的指定锁定类型设置锁定值。

```javascript editor-xlsx
// How to set a lock type of a drawing in a spreadsheet.

// Create a drawing, set its lock value and display it in the worksheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
drawing.SetSize(120 * 36000, 70 * 36000);
drawing.SetPosition(0, 2 * 36000, 1, 3 * 36000);
drawing.SetLockValue("noSelect", true);
let lockValue = drawing.GetLockValue("noSelect");
worksheet.GetRange("A1").SetValue("This drawing cannot be selected: " + lockValue);
```
