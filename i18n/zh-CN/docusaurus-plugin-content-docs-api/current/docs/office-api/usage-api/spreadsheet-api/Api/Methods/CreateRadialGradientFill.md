# CreateRadialGradientFill

创建径向渐变填充，使用所选径向渐变作为对象背景应用于对象。

## 语法

```javascript
expression.CreateRadialGradientFill(gradientStops);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| gradientStops | 必需 | number[] |  | 以千分之一百分比度量的渐变颜色光圈数组。 |

## 返回值

[ApiFill](../../ApiFill/ApiFill.md)

## 示例

在电子表格中用从中心向外辐射的颜色填充形状。

```javascript editor-xlsx
// How do I make a shape's background fade from one color to another in a circular pattern in a spreadsheet?

// Give a shape a circular color blend that transitions from the middle to the edges in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
let fill = Api.CreateRadialGradientFill([gs1, gs2]);
var stroke = Api.CreateStroke(0, Api.CreateNoFill());
worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 1, 3 * 36000);
```
