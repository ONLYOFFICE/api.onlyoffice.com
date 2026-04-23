# CreateWordArt

使用指定的参数创建艺术字对象。

## 语法

```javascript
expression.CreateWordArt(oTextPr, sText, sTransform, oFill, oStroke, nRotAngle, nWidth, nHeight, nIndLeft, nIndTop);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oTextPr | 可选 | [ApiTextPr](../../ApiTextPr/ApiTextPr.md) | Api.CreateTextPr() | 文本属性。 |
| sText | 可选 | string | "Your text here" | 艺术字对象的文本。 |
| sTransform | 可选 | [TextTransform](../../Enumeration/TextTransform.md) | "textNoShape" | 文本变换类型。 |
| oFill | 可选 | [ApiFill](../../ApiFill/ApiFill.md) | Api.CreateNoFill() | 用于填充艺术字对象的颜色或图案。 |
| oStroke | 可选 | [ApiStroke](../../ApiStroke/ApiStroke.md) | Api.CreateStroke(0, Api.CreateNoFill()) | 用于创建艺术字对象阴影的笔触。 |
| nRotAngle | 可选 | number | 0 | 旋转角度。 |
| nWidth | 可选 | [EMU](../../Enumeration/EMU.md) | 1828800 | 以英制度量单位度量的艺术字宽度。 |
| nHeight | 可选 | [EMU](../../Enumeration/EMU.md) | 1828800 | 以英制度量单位度量的艺术字高度。 |
| nIndLeft | 可选 | [EMU](../../Enumeration/EMU.md) | ApiPresentation.GetWidth() / 2 | 以英制单位测量的艺术字左侧缩进值。 |
| nIndTop | 可选 | [EMU](../../Enumeration/EMU.md) | ApiPresentation.GetHeight() / 2 | 以英制单位测量的艺术字顶部缩进值。 |

## 返回值

[ApiDrawing](../../ApiDrawing/ApiDrawing.md)

## 示例

此示例使用 "textArchUp" 文本变换类型创建艺术字对象。

```javascript editor-pptx
// How to create word art indicating its text properties.

// Add arch up text word art.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const run = Api.CreateRun();
const textPr = run.GetTextPr();
textPr.SetFontSize(72);
textPr.SetBold(true);
textPr.SetCaps(true);
textPr.SetColor(Api.HexColor('#333333'));
textPr.SetFontFamily("Comic Sans MS");
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(1 * 36000, Api.CreateSolidFill(Api.RGB(51, 51, 51)));
const textArt = Api.CreateWordArt(textPr, "onlyoffice", "textArchUp", fill, stroke, 0, 100 * 36000, 30 * 36000);
slide.AddObject(textArt);

```
