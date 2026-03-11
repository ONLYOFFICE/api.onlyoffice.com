# GetFlipV

获取当前绘图的垂直翻转状态。

## 语法

```javascript
expression.GetFlipV();
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean \| null

## 示例

此示例检查绘图是否垂直翻转。

```javascript editor-docx
// How to get the vertical flip property of the shape.

// Create a drawing, add text to it, and read its vertical flip value.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("cube", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
drawing.SetVertFlip(true);
let flip = drawing.GetFlipV();
paragraph = Api.CreateParagraph();
paragraph.AddText("Drawing is flipped vertically: " + flip);
doc.AddElement(0, paragraph);

```
