# GetValue

返回图标条件的阈值。

## 语法

```javascript
expression.GetValue();
```

`expression` - 表示 [ApiIconCriterion](../ApiIconCriterion.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string \| number \| null

## 示例

从电子表格中的图标条件读取阈值。

```javascript editor-xlsx
// How do I find out what number or formula an icon criterion uses as its cutoff in a spreadsheet?

// Retrieve the exact boundary value that determines which icon a cell receives in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(75);
worksheet.GetRange("A4").SetValue(50);

let range = worksheet.GetRange("A2:A4");
let formatConditions = range.GetFormatConditions();
let iconCondition = formatConditions.AddIconSetCondition();

let criteria = iconCondition.GetIconCriteria();
let secondCriterion = criteria[1];
let criterionValue = secondCriterion.GetValue();

worksheet.GetRange("B1").SetValue("Second criterion value: " + criterionValue);
```
