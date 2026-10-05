# GetAppliesTo

返回当前条件格式规则应用的单元格区域。

继承自 [ApiFormatCondition.GetAppliesTo](../../ApiFormatCondition/Methods/GetAppliesTo.md)。

## 语法

```javascript
expression.GetAppliesTo();
```

`expression` - 表示 [ApiUniqueValues](../ApiUniqueValues.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiRange](../../ApiRange/ApiRange.md) \| null

## 示例

在电子表格中查找唯一值条件格式规则所覆盖的单元格区域。

```javascript editor-xlsx
// How do I check which cells a unique-values highlighting rule is applied to in a spreadsheet?

// Confirm the exact address of the range a unique-values rule targets in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Data");
worksheet.GetRange("A2").SetValue("Apple");
worksheet.GetRange("A3").SetValue("Banana");
worksheet.GetRange("A4").SetValue("Apple");
worksheet.GetRange("A5").SetValue("Orange");

let range = worksheet.GetRange("A2:A5");
let formatConditions = range.GetFormatConditions();
let uniqueValuesCondition = formatConditions.AddUniqueValues();

// Get the range to which this formatting rule applies
let appliedRange = uniqueValuesCondition.GetAppliesTo();

worksheet.GetRange("C1").SetValue("Applied Range Address:");
worksheet.GetRange("C2").SetValue(appliedRange.GetAddress());
```
