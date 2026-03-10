# GetPrevShape

返回上一个内联形状（如果存在）。

## 语法

```javascript
expression.GetPrevShape();
```

`expression` - 表示 [ApiShape](../ApiShape.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiShape](../../ApiShape/ApiShape.md) \| null

## 示例

此示例展示如何获取上一个内联形状。

```javascript editor-docx
// How to get previous shape from the current one.

// Color the previous shape with a solid fill.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
let fill = Api.CreateLinearGradientFill([gs1, gs2], 5400000);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape1 = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(shape1);
let shape2 = Api.CreateShape("wave", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(shape2);
let prevShape = shape2.GetPrevShape();
fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
prevShape.Fill(fill);
```
