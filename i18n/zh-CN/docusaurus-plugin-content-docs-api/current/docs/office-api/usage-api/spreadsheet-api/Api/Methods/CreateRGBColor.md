# CreateRGBColor

通过设置红、绿、蓝颜色分量的适当值来创建 RGB 颜色。

## 语法

```javascript
expression.CreateRGBColor(r, g, b);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| r | 必需 | [byte](../../Enumeration/byte.md) |  | 红色分量值。 |
| g | 必需 | [byte](../../Enumeration/byte.md) |  | 绿色分量值。 |
| b | 必需 | [byte](../../Enumeration/byte.md) |  | 蓝色分量值。 |

## 返回值

[ApiRGBColor](../../ApiRGBColor/ApiRGBColor.md)

## 示例

从红、绿、蓝值定义自定义颜色以在电子表格中使用。

```javascript editor-xlsx
// How do I build a specific color from its red, green, and blue components in a spreadsheet?

// Mix precise color values to produce any shade for shapes and fills in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
let fill = Api.CreateLinearGradientFill([gs1, gs2], 5400000);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 1, 3 * 36000);
```
