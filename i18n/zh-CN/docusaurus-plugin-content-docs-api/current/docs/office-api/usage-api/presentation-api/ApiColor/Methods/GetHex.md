# GetHex

获取颜色的十六进制字符串表示。

## 语法

```javascript
expression.GetHex();
```

`expression` - 表示 [ApiColor](../ApiColor.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

从颜色对象提取十六进制颜色值。

```javascript editor-pptx
// Convert color representation to hex string format for display.

// Get the hex value of a color and display it within a shape text element.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const color = Api.RGB(255, 111, 61);
const fill = Api.CreateSolidFill(color);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
run.SetFontSize(30);
run.AddText('Hex: ' + color.GetHex());
paragraph.AddElement(run);
slide.AddObject(shape);
```
