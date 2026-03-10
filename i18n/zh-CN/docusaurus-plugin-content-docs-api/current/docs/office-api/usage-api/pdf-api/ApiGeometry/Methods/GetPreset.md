# GetPreset

如果当前几何形状基于预设，则返回预设形状的名称。

## 语法

```javascript
expression.GetPreset();
```

`expression` - 表示 [ApiGeometry](../ApiGeometry.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ShapeType](../../Enumeration/ShapeType.md) \| null

## 示例

Gets geometry information from a star shape on a presentation page.

```javascript editor-pdf
// Displays preset type and custom status in a text shape.
const doc = Api.GetDocument();
const page = doc.GetPage(0);

let fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(200, 100, 0)));
let shape = Api.CreateShape("star5", 100 * 36000, 100 * 36000, fill, stroke);
let geometry = shape.GetGeometry();
shape.GetContent().GetElement(0).AddText("Preset: " + geometry.GetPreset() + ", IsCustom: " + geometry.IsCustom());
shape.SetPosition(1000000, 1000000);
page.AddObject(shape);
```
