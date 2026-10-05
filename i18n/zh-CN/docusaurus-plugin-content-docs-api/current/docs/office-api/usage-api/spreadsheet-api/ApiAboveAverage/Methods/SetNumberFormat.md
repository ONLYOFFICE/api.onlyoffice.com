# SetNumberFormat

设置当条件格式规则计算结果为 true 时应用于单元格的数字格式。

继承自 [ApiFormatCondition.SetNumberFormat](../../ApiFormatCondition/Methods/SetNumberFormat.md)。

## 语法

```javascript
expression.SetNumberFormat(NumberFormat);
```

`expression` - 表示 [ApiAboveAverage](../ApiAboveAverage.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| NumberFormat | 必需 | string |  | 数字格式代码（例如 “General”、“#,##0.00” 等） |

## 返回值

此方法不返回任何数据。

## 示例

在电子表格中为符合高于平均值突出显示规则的单元格应用显示格式。

```javascript editor-xlsx
// How do I control how numbers appear in cells highlighted by an above-average rule in a spreadsheet?

// Change the visual presentation of flagged values without altering the underlying data in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Percentage Scores");
worksheet.GetRange("A2").SetValue(0.75);
worksheet.GetRange("A3").SetValue(0.88);
worksheet.GetRange("A4").SetValue(0.65);
worksheet.GetRange("A5").SetValue(0.92);

let dataRange = worksheet.GetRange("A2:A5");
let formatConditions = dataRange.GetFormatConditions();
let aboveAverageCondition = formatConditions.AddAboveAverage();

worksheet.GetRange("C1").SetValue("Before: General format");
aboveAverageCondition.SetNumberFormat("0.00%");
worksheet.GetRange("C2").SetValue("After: Percentage format");
```
