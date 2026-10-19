# GetColor

返回底纹颜色。

## 语法

```javascript
expression.GetColor();
```

`expression` - 表示 [ApiShd](../ApiShd.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiColor](../../ApiColor/ApiColor.md) \| null \| undefined

## 示例

检索幻灯片中底纹对象的颜色。

```javascript editor-pptx
// Read back the color stored in a shading object on a slide.

// Shade the text of a shape and write the shading color into it.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.Color('#F2F2F2'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const shd = Api.CreateShd('clear', Api.Color('#FCE4D6'));
const paragraph = shape.GetContent().GetElement(0);
const run = Api.CreateRun();
run.SetFontSize(30);
run.SetFill(Api.CreateSolidFill(Api.Color('#000000')));
run.SetShd(shd);
run.AddText('Shading color = ' + shd.GetColor().GetHex());
paragraph.AddElement(run);
slide.AddObject(shape);
```
