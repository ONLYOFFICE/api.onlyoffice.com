# SetFillColor

使用先前创建的颜色对象设置格式条件的背景颜色。

当先前创建的颜色对象为 null 时设置为“无填充”。

继承自 [ApiFormatCondition.SetFillColor](../../ApiFormatCondition/Methods/SetFillColor.md)。

## 语法

```javascript
expression.SetFillColor(oColor);
```

`expression` - 表示 [ApiAboveAverage](../ApiAboveAverage.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oColor | 必需 | [ApiColor](../../ApiColor/ApiColor.md) |  | 指定格式条件背景颜色的颜色对象。 |

## 返回值

此方法不返回任何数据。

## 示例

在电子表格中为值超过平均值的单元格设置背景颜色。

```javascript editor-xlsx
// How do I highlight above-average cells with a specific background color in a spreadsheet?

// Make standout values easy to spot by filling their cells with a chosen color in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Test Values");
worksheet.GetRange("A2").SetValue(80);
worksheet.GetRange("A3").SetValue(95);
worksheet.GetRange("A4").SetValue(70);
worksheet.GetRange("A5").SetValue(85);
worksheet.GetRange("A6").SetValue(60);

let dataRange = worksheet.GetRange("A2:A6");
let formatConditions = dataRange.GetFormatConditions();

let aboveAvgCondition = formatConditions.AddAboveAverage();

let greenColor = Api.CreateColorFromRGB(0, 255, 0);
aboveAvgCondition.SetFillColor(greenColor);

worksheet.GetRange("B1").SetValue("Above average cells are highlighted in green");
```
