# GetColorScaleCriteria

返回定义此色阶规则的条件集合。

## 语法

```javascript
expression.GetColorScaleCriteria();
```

`expression` - 表示 [ApiColorScale](../ApiColorScale.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiColorScaleCriterion](../../ApiColorScaleCriterion/ApiColorScaleCriterion.md)[] \| null

## 示例

此示例演示如何获取色阶条件集合。

```javascript editor-xlsx
// How to access and display color scale criteria information.

// Get the collection of color scale criteria from a color scale conditional formatting rule.

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

worksheet.GetRange("C1").SetValue("Criteria Count:");
worksheet.GetRange("C2").SetValue(criteria ? criteria.length : 0);

```
