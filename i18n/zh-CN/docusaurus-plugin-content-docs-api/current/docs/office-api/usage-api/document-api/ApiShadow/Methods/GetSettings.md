# GetSettings

返回当前阴影的设置。

## 语法

```javascript
expression.GetSettings();
```

`expression` - 表示 [ApiShadow](../ApiShadow.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ShadowSettings](../../Enumeration/ShadowSettings.md)

## 示例

读取文档中应用于绘图对象的阴影设置。

```javascript editor-docx
// Retrieve the shadow object and inspect its transparency, offset and size.

// Set a shadow, read its settings with GetSettings, and print the values inside the shape.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);
const fill = Api.CreateSolidFill(Api.RGB(255, 213, 191));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 160 * 36000, 80 * 36000, fill, stroke);
paragraph.AddDrawing(shape);
shape.SetWrappingStyle("inFront");
shape.SetHorPosition("page", 30 * 36000);
shape.SetVerPosition("page", 30 * 36000);
shape.SetShadow(Api.CreateShadow({ color: Api.RGB(0, 0, 0), transparency: 0.5, offsetX: 3, offsetY: 3 }));
const settings = shape.GetShadow().GetSettings();
shape.GetContent().GetElement(0).AddText("Shadow transparency " + settings.transparency + ", offset " + Math.round(settings.offsetX) + " x " + Math.round(settings.offsetY) + ", size " + settings.size + "%");
```
