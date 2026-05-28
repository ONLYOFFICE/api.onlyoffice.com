# CreateStroke

创建为元素添加阴影的笔触。

## 语法

```javascript
expression.CreateStroke(width, fill, sDash);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| width | 必需 | [EMU](../../Enumeration/EMU.md) |  | 以英制度量单位度量的阴影宽度。 |
| fill | 必需 | [ApiFill](../../ApiFill/ApiFill.md) |  | 用于创建阴影的填充类型。 |
| sDash | 可选 | [DashType](../../Enumeration/DashType.md) | "solid" | 线条虚线类型。 |

## 返回值

[ApiStroke](../../ApiStroke/ApiStroke.md)

## 示例

在电子表格中以所选宽度为形状绘制彩色边框。

```javascript editor-xlsx
// How do I add a visible outline to a shape in a spreadsheet?

// Surround a shape with a styled border to make its edges clearly defined in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
let fill = Api.CreateLinearGradientFill([gs1, gs2], 5400000);
let fill1 = Api.CreateSolidFill(Api.RGB(51, 51, 51));
let stroke = Api.CreateStroke(3 * 36000, fill1);
worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 1, 3 * 36000);
```
