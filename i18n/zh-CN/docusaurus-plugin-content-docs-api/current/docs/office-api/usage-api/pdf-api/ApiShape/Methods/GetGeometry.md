# GetGeometry

返回当前形状的几何对象。

## 语法

```javascript
expression.GetGeometry();
```

`expression` - 表示 [ApiShape](../ApiShape.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiGeometry](../../ApiGeometry/ApiGeometry.md)

## 示例

了解 PDF 中形状的绘图图案细节。

```javascript editor-pdf
// How do I check the shape's drawing pattern in a PDF?

// Access the shape's built-in or custom drawing design in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 200, 100));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.CreateRGBColor(200, 100, 0)));
let shape = Api.CreateShape("star5", 100 * 36000, 100 * 36000, fill, stroke);
let geometry = shape.GetGeometry();
shape.GetContent().GetElement(0).AddText("Preset: " + geometry.GetPreset() + ", IsCustom: " + geometry.IsCustom());
shape.SetPosition(1000000, 1000000);
page.AddObject(shape);
```
