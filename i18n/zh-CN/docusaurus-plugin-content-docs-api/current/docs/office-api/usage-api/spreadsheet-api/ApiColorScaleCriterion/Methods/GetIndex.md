# GetIndex

返回指示条件代表哪个阈值的索引。

## 语法

```javascript
expression.GetIndex();
```

`expression` - 表示 [ApiColorScaleCriterion](../ApiColorScaleCriterion.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

检索电子表格中颜色渐变规则中断点的位置编号。

```javascript editor-xlsx
// How do I find out which stop number a particular criterion occupies in a color scale in a spreadsheet?

// Identify the sequential order of a color scale breakpoint to understand its place in the gradient in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Test Data");
worksheet.GetRange("A2").SetValue(10);
worksheet.GetRange("A3").SetValue(30);
worksheet.GetRange("A4").SetValue(50);
worksheet.GetRange("A5").SetValue(70);
worksheet.GetRange("A6").SetValue(90);

let dataRange = worksheet.GetRange("A2:A6");
let formatConditions = dataRange.GetFormatConditions();

let colorScale = formatConditions.AddColorScale(3);
let criteria = colorScale.GetColorScaleCriteria();

if (criteria && criteria.length > 0) {
    worksheet.GetRange("C1").SetValue("Criterion 1 Index:");
    worksheet.GetRange("C2").SetValue(criteria[0].GetIndex());
    
    if (criteria.length > 1) {
        worksheet.GetRange("C3").SetValue("Criterion 2 Index:");
        worksheet.GetRange("C4").SetValue(criteria[1].GetIndex());
    }
}
```
