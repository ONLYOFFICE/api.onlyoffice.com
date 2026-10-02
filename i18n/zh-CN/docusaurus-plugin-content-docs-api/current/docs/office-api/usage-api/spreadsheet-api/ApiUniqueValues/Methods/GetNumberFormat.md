# GetNumberFormat

返回当条件格式规则计算结果为 true 时应用于单元格的数字格式。

继承自 [ApiFormatCondition.GetNumberFormat](../../ApiFormatCondition/Methods/GetNumberFormat.md)。

## 语法

```javascript
expression.GetNumberFormat();
```

`expression` - 表示 [ApiUniqueValues](../ApiUniqueValues.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

在电子表格中读取分配给唯一值条件格式规则的数字格式模式。

```javascript editor-xlsx
// How do I check what number format a unique-values rule applies to matching cells in a spreadsheet?

// Confirm the numeric display pattern a unique-values rule enforces on highlighted cells in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Numbers");
worksheet.GetRange("A2").SetValue(10.5);
worksheet.GetRange("A3").SetValue(20.3);
worksheet.GetRange("A4").SetValue(10.5);
worksheet.GetRange("A5").SetValue(30.7);

let range = worksheet.GetRange("A2:A5");
let formatConditions = range.GetFormatConditions();
let uniqueValuesCondition = formatConditions.AddUniqueValues();

uniqueValuesCondition.SetNumberFormat("0.00%");

let numberFormat = uniqueValuesCondition.GetNumberFormat();

worksheet.GetRange("C1").SetValue("Number format:");
worksheet.GetRange("C2").SetValue(numberFormat);
```
