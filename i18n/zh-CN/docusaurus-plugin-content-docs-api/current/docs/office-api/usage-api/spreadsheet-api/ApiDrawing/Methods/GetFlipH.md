# GetFlipH

获取当前绘图的水平翻转状态。

## 语法

```javascript
expression.GetFlipH();
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean \| null

## 示例

此示例检查绘图是否水平翻转。

```javascript editor-xlsx
// How to get the horizontal flip property of the shape.

// Create a drawing and read its horizontal flip value.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = worksheet.AddShape("cube", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let flip = drawing.GetFlipH();
worksheet.SetColumnWidth(0, 25);
worksheet.GetRange("A1").SetValue("Drawing is flipped horizontally: " + flip);

```
