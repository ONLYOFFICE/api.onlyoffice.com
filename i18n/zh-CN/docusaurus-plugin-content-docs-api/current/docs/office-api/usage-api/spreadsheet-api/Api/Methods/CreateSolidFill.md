# CreateSolidFill

创建纯色填充，使用所选纯色作为对象背景应用于对象。

## 语法

```javascript
expression.CreateSolidFill(color);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | 必需 | [ApiColor](../../ApiColor/ApiColor.md) |  | 用于元素填充的颜色。 |

## 返回值

[ApiFill](../../ApiFill/ApiFill.md)

## 示例

在电子表格中用单一纯色作为形状的背景。

```javascript editor-xlsx
// How do I fill a shape with one uniform color in a spreadsheet?

// Cover a shape's surface with a plain, unblended color to make it stand out in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let rgbColor = Api.RGB(255, 111, 61);
let fill = Api.CreateSolidFill(rgbColor);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 1, 3 * 36000);
```
