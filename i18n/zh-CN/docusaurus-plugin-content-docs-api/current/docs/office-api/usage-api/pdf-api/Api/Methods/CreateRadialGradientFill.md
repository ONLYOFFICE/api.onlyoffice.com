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

此示例展示如何创建径向渐变填充。

```javascript editor-pdf
// How to create a radial gradient fill.

// Add a radial gradient fill.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const gs1 = Api.CreateGradientStop(Api.CreatePresetColor("peachPuff"), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
page.AddObject(drawing);

```
