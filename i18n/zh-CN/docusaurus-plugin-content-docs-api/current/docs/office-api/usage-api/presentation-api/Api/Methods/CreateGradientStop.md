# CreateGradientStop

创建用于不同类型渐变的渐变光圈。

## 语法

```javascript
expression.CreateGradientStop(color, pos);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | 必需 | ApiColor |  | 用于渐变光圈的颜色。 |
| pos | 必需 | [PositivePercentage](../../Enumeration/PositivePercentage.md) |  | 以千分之一百分比度量的渐变光圈位置。 |

## 返回值

[ApiGradientStop](../../ApiGradientStop/ApiGradientStop.md)

## 示例

此示例展示如何创建用于不同类型渐变的渐变光圈。

```javascript editor-pptx
// How to add a gradient stop for gradient.

// Create a stop for a gradient.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
slide.AddObject(drawing);

```
