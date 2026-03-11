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

```javascript editor-pptx
// How to get the vertical flip property of the shape.

// Create a drawing, flip it vertically, and read its vertical flip value.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("cube", 300 * 36000, 130 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
drawing.SetFlipV(true);
slide.AddObject(drawing);
const flip = drawing.GetFlipV();
const docContent = drawing.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Drawing is flipped vertically: " + flip);

```
