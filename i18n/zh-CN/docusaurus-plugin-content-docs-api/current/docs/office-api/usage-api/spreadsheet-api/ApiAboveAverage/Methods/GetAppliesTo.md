# GetAppliesTo

返回当前条件格式规则应用的单元格区域。

继承自 [ApiFormatCondition.GetAppliesTo](../../ApiFormatCondition/Methods/GetAppliesTo.md)。

## 语法

```javascript
expression.GetAppliesTo();
```

`expression` - 表示 [ApiAboveAverage](../ApiAboveAverage.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiRange](../../ApiRange/ApiRange.md) \| null

## 示例

在电子表格中获取高于平均值条件格式规则所覆盖的单元格区域。

```javascript editor-xlsx
// How do I find out which cells an above-average highlight rule is applied to in a spreadsheet?

// Confirm the target range of an average-based rule by reading its applied area in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Student Grades");
worksheet.GetRange("A2").SetValue(75);
worksheet.GetRange("A3").SetValue(88);
worksheet.GetRange("A4").SetValue(92);
worksheet.GetRange("A5").SetValue(67);
worksheet.GetRange("A6").SetValue(85);

let dataRange = worksheet.GetRange("A2:A6");
let formatConditions = dataRange.GetFormatConditions();
let aboveAverageCondition = formatConditions.AddAboveAverage();
aboveAverageCondition.GetFont().SetColor(Api.CreateColorFromRGB(0, 128, 0));

let appliedRange = aboveAverageCondition.GetAppliesTo();
worksheet.GetRange("C1").SetValue("Rule applies to:");
worksheet.GetRange("C2").SetValue(appliedRange.GetAddress());
```
