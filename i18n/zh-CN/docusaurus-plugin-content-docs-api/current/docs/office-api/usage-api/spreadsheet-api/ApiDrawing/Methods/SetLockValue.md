# SetLockValue

设置当前绘图的指定锁定类型的锁定值。

## 语法

```javascript
expression.SetLockValue(sType, bValue);
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | 必需 | [DrawingLockType](../../Enumeration/DrawingLockType.md) |  | 字符串格式的锁定类型。 |
| bValue | 必需 | boolean |  | 指定是否将指定的锁定应用于当前绘图。 |

## 返回值

boolean

## 示例

通过在电子表格中设置锁定来防止绘图被选中或修改。

```javascript editor-xlsx
// How do I restrict what a user can do with a drawing in a spreadsheet?

// Protect a shape from user interaction by applying a specific lock type to it in a spreadsheet.

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
