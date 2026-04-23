# GetType

返回色阶条件的类型。

## 语法

```javascript
expression.GetType();
```

`expression` - 表示 [ApiColorScaleCriterion](../ApiColorScaleCriterion.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[XlConditionValueTypes](../../Enumeration/XlConditionValueTypes.md) \| null

## 示例

此示例演示如何获取色阶条件的类型。

```javascript editor-xlsx
// How to check the type of a color scale criterion.

// Get the type of a color scale criterion.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Test Data");
worksheet.GetRange("A2").SetValue(10);
worksheet.GetRange("A3").SetValue(30);
worksheet.GetRange("A4").SetValue(50);
worksheet.GetRange("A5").SetValue(70);
worksheet.GetRange("A6").SetValue(90);

let dataRange = worksheet.GetRange("A2:A6");
let formatConditions = dataRange.GetFormatConditions();

let colorScale = formatConditions.AddColorScale(2);
let criteria = colorScale.GetColorScaleCriteria();

if (criteria && criteria.length > 0) {
    let criterionType = criteria[0].GetType();
    
    worksheet.GetRange("C1").SetValue("Criterion Type:");
    worksheet.GetRange("C2").SetValue(criterionType);
}

```
