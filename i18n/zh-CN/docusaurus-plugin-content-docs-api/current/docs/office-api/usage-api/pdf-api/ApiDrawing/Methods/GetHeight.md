# GetHeight

返回当前绘图的高度。

## 语法

```javascript
expression.GetHeight();
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[EMU](../../Enumeration/EMU.md)

## 示例

How to find a shape's height and display it on the page.

```javascript editor-pdf
// Get a page shape's height.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const height = shape.GetHeight();
const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("Drawing height: " + height);
page.AddObject(shape);
```
