# IsCustom

检查当前几何形状是否为自定义。

## 语法

```javascript
expression.IsCustom();
```

`expression` - 表示 [ApiGeometry](../ApiGeometry.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

从演示文稿幻灯片上的星形获取几何图形信息。在文本形状中显示预设类型和自定义状态。

```javascript editor-pptx
// How do I is custom in a presentation?

// Is custom using a geometry object in a presentation.

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
