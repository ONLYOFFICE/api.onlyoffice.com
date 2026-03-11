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

此示例展示如何获取颜色的 RGB 分量。

```javascript editor-pdf
const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
const hexColor = Api.HexColor('#FF0000');
const hexColorRGB = hexColor.GetRGB();
run.SetFontSize(30);
run.AddText('RGB of hexColor: ' + hexColorRGB.r + ', ' + hexColorRGB.g + ', ' + hexColorRGB.b);
paragraph.AddElement(run);
page.AddObject(shape);

```
