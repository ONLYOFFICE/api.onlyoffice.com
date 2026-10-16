# GetFlipV

获取当前绘图的垂直翻转状态。

继承自 [ApiDrawing.GetFlipV](../../ApiDrawing/Methods/GetFlipV.md)。

## 语法

```javascript
expression.GetFlipV();
```

`expression` - 表示 [ApiGroup](../ApiGroup.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean \| null

## 示例

确定 PDF 表单页面上的形状是否已垂直翻转。

```javascript editor-pdf
// Read the vertical flip state of a shape after applying a mirror transform.

// Create a shape, flip it vertically, then read and display the flip state.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("upArrow", 60 * 36000, 120 * 36000, fill, stroke);
shape.SetPosition(20 * 36000, 20 * 36000);
page.AddObject(shape);
shape.SetFlipV(true);
const flip = shape.GetFlipV();
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Drawing is flipped vertically: " + flip);
```
