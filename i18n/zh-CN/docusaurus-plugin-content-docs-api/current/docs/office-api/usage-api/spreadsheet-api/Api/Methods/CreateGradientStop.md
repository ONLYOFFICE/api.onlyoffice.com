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
| color | 必需 | [ApiColor](../../ApiColor/ApiColor.md) |  | 用于渐变光圈的颜色。 |
| pos | 必需 | [PositivePercentage](../../Enumeration/PositivePercentage.md) |  | 以千分之一百分比度量的渐变光圈位置。 |

## 返回值

[ApiGradientStop](../../ApiGradientStop/ApiGradientStop.md)

## 示例

此示例创建用于不同类型渐变的渐变色标。

```javascript editor-xlsx
// How to create a gradient background using gradient stop.

// Create a shape with a gradient background using gradient stop.

let worksheet = Api.GetActiveSheet();
let gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
let fill = Api.CreateLinearGradientFill([gs1, gs2], 5400000);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 1, 3 * 36000);
```
