# GetIconCriteria

返回表示图标集条件格式规则的阈值和图标的图标条件集合。

## 语法

```javascript
expression.GetIconCriteria();
```

`expression` - 表示 [ApiIconSetCondition](../ApiIconSetCondition.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiIconCriterion](../../ApiIconCriterion/ApiIconCriterion.md)[] \| null

## 示例

此示例演示如何获取图标条件集合。

```javascript editor-xlsx
// How to retrieve icon criteria for conditional formatting.

// Get the collection of icon criteria from the formatting rule.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Performance");
worksheet.GetRange("A2").SetValue(95);
worksheet.GetRange("A3").SetValue(75);
worksheet.GetRange("A4").SetValue(55);

let range = worksheet.GetRange("A2:A4");
let formatConditions = range.GetFormatConditions();
let iconCondition = formatConditions.AddIconSetCondition();

let criteria = iconCondition.GetIconCriteria();
worksheet.GetRange("B1").SetValue("Number of criteria: " + criteria.length);

```
