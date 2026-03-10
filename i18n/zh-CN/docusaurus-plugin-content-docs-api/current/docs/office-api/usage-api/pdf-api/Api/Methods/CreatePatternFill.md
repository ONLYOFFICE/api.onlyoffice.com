# CreatePatternFill

创建图案填充，使用所选图案作为对象背景应用于对象。

## 语法

```javascript
expression.CreatePatternFill(patternType, bgColor, fgColor);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| patternType | 必需 | [PatternType](../../Enumeration/PatternType.md) |  | 从可用图案类型中选择的用于填充的图案类型。 |
| bgColor | 必需 | [ApiColor](../../ApiColor/ApiColor.md) |  | 用于创建图案的背景色。 |
| fgColor | 必需 | [ApiColor](../../ApiColor/ApiColor.md) |  | 用于创建图案的前景色。 |

## 返回值

[ApiFill](../../ApiFill/ApiFill.md)

## 示例

此示例创建图案填充，并使用所选图案作为对象背景应用于对象。

```javascript editor-pdf
// How to apply pattern to the background of a drawing.

// Change color of an element using a pattern fill.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreatePatternFill("dashDnDiag", Api.RGB(255, 111, 61), Api.RGB(51, 51, 51));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
page.AddObject(drawing);

```
