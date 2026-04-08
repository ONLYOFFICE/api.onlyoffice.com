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

此示例创建径向渐变填充，使用选定的径向渐变作为对象背景应用于对象。

```javascript editor-xlsx
// How to set a radial gradient background for a shape.

// Add a shape with a radial gradient color.

let worksheet = Api.GetActiveSheet();
let gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
let fill = Api.CreateRadialGradientFill([gs1, gs2]);
var stroke = Api.CreateStroke(0, Api.CreateNoFill());
worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 1, 3 * 36000);
```
