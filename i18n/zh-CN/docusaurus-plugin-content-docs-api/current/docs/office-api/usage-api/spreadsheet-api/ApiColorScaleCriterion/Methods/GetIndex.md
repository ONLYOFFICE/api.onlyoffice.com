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

此示例演示如何获取色阶条件的索引。

```javascript editor-xlsx
// How to determine which threshold a criterion represents.

// Get the index of a color scale criterion.

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
