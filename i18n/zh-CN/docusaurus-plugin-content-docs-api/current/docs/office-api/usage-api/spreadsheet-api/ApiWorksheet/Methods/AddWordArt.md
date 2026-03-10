# AddWordArt

使用指定的参数向当前工作表添加艺术字对象。

## 语法

```javascript
expression.AddWordArt(oTextPr, sText, sTransform, oFill, oStroke, nRotAngle, nWidth, nHeight, nFromCol, nFromRow, nColOffset, nRowOffset);
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

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
| nFromCol | 可选 | number | 0 | 艺术字对象起始位置所在的列号。 |
| nFromRow | 可选 | number | 0 | 艺术字对象起始位置所在的行号。 |
| nColOffset | 可选 | [EMU](../../Enumeration/EMU.md) | 0 | 从 nFromCol 列到艺术字对象左侧的偏移量，以英制单位测量。 |
| nRowOffset | 可选 | [EMU](../../Enumeration/EMU.md) | 0 | 从 nFromRow 行到艺术字对象上部的偏移量，以英制单位测量。 |

## 返回值

[ApiDrawing](../../ApiDrawing/ApiDrawing.md)

## 示例

此示例使用指定的参数向工作表添加艺术字对象。

```javascript editor-xlsx
// How to add a word art to the worksheet specifying its properties, color, size, etc.

// Insert a word art to the worksheet.

let worksheet = Api.GetActiveSheet();
let textProps = Api.CreateTextPr();
textProps.SetFontSize(72);
textProps.SetBold(true);
textProps.SetCaps(true);
textProps.SetColor(Api.HexColor('#333333'));
textProps.SetFontFamily("Comic Sans MS");
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(1 * 36000, Api.CreateSolidFill(Api.RGB(51, 51, 51)));
worksheet.AddWordArt(textProps, "onlyoffice", "textArchUp", fill, stroke, 0, 100 * 36000, 20 * 36000, 0, 2, 2 * 36000, 3 * 36000);
```
