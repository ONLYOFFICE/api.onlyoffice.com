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

在电子表格中用两种颜色的重复图案填充形状的背景。

```javascript editor-xlsx
// How do I apply a tiled pattern as the background of a shape in a spreadsheet?

// Decorate a shape by covering its surface with a repeated design made from two chosen colors in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreatePatternFill("dashDnDiag", Api.RGB(255, 111, 61), Api.RGB(51, 51, 51));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 1, 3 * 36000);
```
