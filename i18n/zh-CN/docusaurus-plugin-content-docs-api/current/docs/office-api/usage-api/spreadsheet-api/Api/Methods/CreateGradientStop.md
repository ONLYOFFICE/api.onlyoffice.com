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

在电子表格中沿渐变的特定位置设置颜色锚点。

```javascript editor-xlsx
// How do I define where one color ends and another begins inside a gradient fill in a spreadsheet?

// Control a gradient's color transition by placing a color marker at a chosen position in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
let fill = Api.CreateLinearGradientFill([gs1, gs2], 5400000);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 1, 3 * 36000);
```
