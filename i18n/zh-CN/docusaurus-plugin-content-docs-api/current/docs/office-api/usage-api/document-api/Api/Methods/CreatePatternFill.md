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

在文档中使用两种颜色的图案背景填充形状。

```javascript editor-docx
// How do I apply a diagonal dash pattern as the background of a shape in a document?

// Give a shape a decorative patterned fill instead of a solid color in a document.

const bgColor = Api.HexColor('#abcdef');
const fgColor = Api.ThemeColor('accent3');
const fill = Api.CreatePatternFill('dashDnDiag', bgColor, fgColor);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 5930900, 395605, fill, stroke);

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);
paragraph.AddDrawing(shape);
```
