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

在演示文稿中读取应用于绘图对象的阴影设置。

```javascript editor-pptx
// Retrieve the shadow object and inspect its transparency, offset and size.

// Set a shadow, read its settings with GetSettings, and print the values inside the shape.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
const fill = Api.CreateSolidFill(Api.RGB(255, 213, 191));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 160 * 36000, 80 * 36000, fill, stroke);
shape.SetPosition(40 * 36000, 40 * 36000);
slide.AddObject(shape);
shape.SetShadow(Api.CreateShadow({ color: Api.RGB(0, 0, 0), transparency: 0.5, offsetX: 3, offsetY: 3 }));
const settings = shape.GetShadow().GetSettings();
shape.GetContent().GetElement(0).AddText("Shadow transparency " + settings.transparency + ", offset " + Math.round(settings.offsetX) + " x " + Math.round(settings.offsetY) + ", size " + settings.size + "%");
```
