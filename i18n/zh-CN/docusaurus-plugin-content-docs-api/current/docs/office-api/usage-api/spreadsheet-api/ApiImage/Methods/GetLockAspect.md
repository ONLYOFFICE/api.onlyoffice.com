# GetLockAspect

返回绘图对象的纵横比是否已锁定。

继承自 [ApiDrawing.GetLockAspect](../../ApiDrawing/Methods/GetLockAspect.md)。

## 语法

```javascript
expression.GetLockAspect();
```

`expression` - 表示 [ApiImage](../ApiImage.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

返回电子表格中绘图对象的纵横比是否已锁定。

```javascript editor-xlsx
// Useful for checking the lock aspect ratio state of a shape in a spreadsheet.

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
