# GetFlipH

获取当前绘图的水平翻转状态。

继承自 [ApiDrawing.GetFlipH](../../ApiDrawing/Methods/GetFlipH.md)。

## 语法

```javascript
expression.GetFlipH();
```

`expression` - 表示 [ApiImage](../ApiImage.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean \| null

## 示例

确定 PDF 表单页面上的形状是否已水平翻转。

```javascript editor-pdf
// Read the horizontal flip state of a shape after applying a mirror transform.

// Create a shape, flip it horizontally, then read and display the flip state.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rightArrow", 120 * 36000, 60 * 36000, fill, stroke);
shape.SetPosition(20 * 36000, 20 * 36000);
page.AddObject(shape);
shape.SetFlipH(true);
const flip = shape.GetFlipH();
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Drawing is flipped horizontally: " + flip);
```
