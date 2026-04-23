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

从演示文稿幻灯片上的星形形状获取几何信息。

```javascript editor-pptx
// Displays preset type and custom status in a text shape.
let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(200, 100, 0)));
let shape = Api.CreateShape("star5", 100 * 36000, 100 * 36000, fill, stroke);
let geometry = shape.GetGeometry();
shape.GetDocContent().GetElement(0).AddText("Preset: " + geometry.GetPreset() + ", IsCustom: " + geometry.IsCustom());
shape.SetPosition(1000000, 1000000);
slide.AddObject(shape);
```
