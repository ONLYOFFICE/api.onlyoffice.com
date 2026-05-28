# SetNegativeBarColor

设置数据条的负值条颜色。

## 语法

```javascript
expression.SetNegativeBarColor(oColor);
```

`expression` - 表示 [ApiDatabar](../ApiDatabar.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oColor | 必需 | [ApiColor](../../ApiColor/ApiColor.md) |  | 负值条的 ApiColor 对象。 |

## 返回值

此方法不返回任何数据。

## 示例

为电子表格中表示负值的数据条分配不同的颜色。

```javascript editor-xlsx
// How do I make negative data bars appear in a different color from positive ones in a spreadsheet?

// Highlight cells with negative numbers by giving their data bars a contrasting color in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(-50);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(-25);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");
let formatConditions = dataRange.GetFormatConditions();

let dataBar = formatConditions.AddDatabar();

worksheet.GetRange("C1").SetValue("Before:");
worksheet.GetRange("C2").SetValue(dataBar.GetNegativeBarColor() ? "Set" : "None");

let negativeColor = Api.CreateColorFromRGB(255, 0, 0);
dataBar.SetNegativeBarColor(negativeColor);

worksheet.GetRange("C3").SetValue("After:");
worksheet.GetRange("C4").SetValue(dataBar.GetNegativeBarColor() ? "Set" : "None");
```
