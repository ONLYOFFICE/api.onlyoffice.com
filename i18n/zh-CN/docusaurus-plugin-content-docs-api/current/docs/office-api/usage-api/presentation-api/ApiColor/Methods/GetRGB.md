# GetRGB

获取颜色的 RGB 分量。

## 语法

```javascript
expression.GetRGB();
```

`expression` - 表示 [ApiColor](../ApiColor.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

Object

## 示例

从颜色对象提取 RGB 分量值。

```javascript editor-pptx
// Convert hexadecimal color to separate red, green, blue channels.

// Get the RGB components of a color and display them within a shape text element.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const color = Api.HexColor('#FF0000');
const fill = Api.CreateSolidFill(color);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const rgb = color.GetRGB();
const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
run.SetFontSize(30);
run.AddText('RGB: ' + rgb.r + ', ' + rgb.g + ', ' + rgb.b);
paragraph.AddElement(run);
slide.AddObject(shape);
```
