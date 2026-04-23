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

此示例设置当前绘图的指定锁定类型的锁定值。

```javascript editor-xlsx
// How to set a lock type of a drawing.

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
