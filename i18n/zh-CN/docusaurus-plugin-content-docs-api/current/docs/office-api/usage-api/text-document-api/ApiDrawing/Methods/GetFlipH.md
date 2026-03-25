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

```javascript editor-docx
// How to get the horizontal flip property of the shape.

// Create a drawing, add text to it, and read its horizontal flip value.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("cube", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
let flip = drawing.GetFlipH();
paragraph = Api.CreateParagraph();
paragraph.AddText("Drawing is flipped horizontally: " + flip);
doc.AddElement(0, paragraph);
```
