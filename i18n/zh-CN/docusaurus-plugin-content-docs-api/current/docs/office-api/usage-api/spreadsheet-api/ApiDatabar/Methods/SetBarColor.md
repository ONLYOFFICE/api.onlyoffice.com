# SetBarColor

设置数据条的颜色。

## 语法

```javascript
expression.SetBarColor(oColor);
```

`expression` - 表示 [ApiDatabar](../ApiDatabar.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oColor | 必需 | [ApiColor](../../ApiColor/ApiColor.md) |  | 表示条颜色的 ApiColor 对象。 |

## 返回值

此方法不返回任何数据。

## 示例

为电子表格中用于条件格式的数据条应用自定义填充颜色。

```javascript editor-xlsx
// How do I change the color of data bars shown inside cells in a spreadsheet?

// Make data bars stand out by assigning them a specific color that fits your design in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");
let formatConditions = dataRange.GetFormatConditions();

let dataBar = formatConditions.AddDatabar();

worksheet.GetRange("C1").SetValue("Before Color:");
worksheet.GetRange("C2").SetValue(dataBar.GetBarColor() ? "Set" : "None");

let barColor = Api.CreateColorFromRGB(0, 128, 255);
dataBar.SetBarColor(barColor);

worksheet.GetRange("C3").SetValue("After Color:");
worksheet.GetRange("C4").SetValue(dataBar.GetBarColor() ? "Set" : "None");
```
