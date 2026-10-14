# SetLockAspect

设置是否锁定绘图对象的纵横比。

继承自 [ApiDrawing.SetLockAspect](../../ApiDrawing/Methods/SetLockAspect.md)。

## 语法

```javascript
expression.SetLockAspect(bAspect);
```

`expression` - 表示 [ApiGroup](../ApiGroup.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bAspect | 必需 | boolean |  | 指定是否锁定此绘图对象的纵横比。 |

## 返回值

boolean

## 示例

在电子表格中设置是否锁定绘图对象的纵横比。

```javascript editor-xlsx
// Useful for locking the aspect ratio of a shape in a spreadsheet.

// Create a shape, lock its aspect ratio and display the result.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = worksheet.AddShape("triangle", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
drawing.SetSize(120 * 36000, 70 * 36000);
drawing.SetPosition(0, 2 * 36000, 1, 3 * 36000);
drawing.SetLockAspect(true);
let lockAspect = drawing.GetLockAspect();
worksheet.GetRange("A1").SetValue("Aspect ratio locked: " + lockAspect);
```
