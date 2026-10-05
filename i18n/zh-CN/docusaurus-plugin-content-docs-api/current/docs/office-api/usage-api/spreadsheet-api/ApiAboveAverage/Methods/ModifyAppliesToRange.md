# ModifyAppliesToRange

设置当前条件格式规则应用的单元格区域。

继承自 [ApiFormatCondition.ModifyAppliesToRange](../../ApiFormatCondition/Methods/ModifyAppliesToRange.md)。

## 语法

```javascript
expression.ModifyAppliesToRange(Range);
```

`expression` - 表示 [ApiAboveAverage](../ApiAboveAverage.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Range | 必需 | [ApiRange](../../ApiRange/ApiRange.md) |  | 当前条件格式规则将应用的区域。 |

## 返回值

此方法不返回任何数据。

## 示例

在电子表格中更新现有高于平均值突出显示规则所覆盖的单元格。

```javascript editor-xlsx
// How do I expand or change which cells an above-average formatting rule targets in a spreadsheet?

// Reassign a highlight rule to a different set of cells without recreating it in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Original Data");
worksheet.GetRange("A2").SetValue(80);
worksheet.GetRange("A3").SetValue(90);
worksheet.GetRange("A4").SetValue(70);

worksheet.GetRange("B1").SetValue("Extended Data");
worksheet.GetRange("B2").SetValue(85);
worksheet.GetRange("B3").SetValue(95);
worksheet.GetRange("B4").SetValue(75);

let originalRange = worksheet.GetRange("A2:A4");
let formatConditions = originalRange.GetFormatConditions();
let aboveAverageCondition = formatConditions.AddAboveAverage();
aboveAverageCondition.GetFont().SetColor(Api.CreateColorFromRGB(0, 255, 0));

worksheet.GetRange("D1").SetValue("Before: A2:A4");
let newRange = worksheet.GetRange("A2:B4");
aboveAverageCondition.ModifyAppliesToRange(newRange);
worksheet.GetRange("D2").SetValue("After: A2:B4");
```
