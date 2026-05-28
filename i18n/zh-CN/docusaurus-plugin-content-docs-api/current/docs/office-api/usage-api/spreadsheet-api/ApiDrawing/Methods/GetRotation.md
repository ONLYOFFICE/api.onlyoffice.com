# GetRotation

返回当前绘图对象的旋转角度。

## 语法

```javascript
expression.GetRotation();
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

检索电子表格中绘图的旋转角度。

```javascript editor-xlsx
// How do I find out by how many degrees a drawing has been turned in a spreadsheet?

// Confirm the angle at which a shape is oriented after it has been rotated in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = worksheet.AddShape("rect", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
drawing.SetSize(130 * 36000, 10 * 36000);
drawing.SetPosition(0, 2 * 36000, 1, 5 * 36000);
drawing.SetRotation(90);
let rotAngle = drawing.GetRotation();
worksheet.GetRange("A1").SetValue("Drawing rotation angle is: " + rotAngle + " degrees");
```
