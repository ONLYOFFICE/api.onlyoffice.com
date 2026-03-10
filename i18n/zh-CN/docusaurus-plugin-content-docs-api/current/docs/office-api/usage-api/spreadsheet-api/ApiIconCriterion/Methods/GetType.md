# GetType

返回图标条件的条件值类型。

## 语法

```javascript
expression.GetType();
```

`expression` - 表示 [ApiIconCriterion](../ApiIconCriterion.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[XlConditionValueTypes](../../Enumeration/XlConditionValueTypes.md) \| null

## 示例

此示例演示如何获取图标条件的类型。

```javascript editor-xlsx
// How to retrieve the type from an icon set criterion.

// Get the criterion type used for threshold comparison.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Scores");
worksheet.GetRange("A2").SetValue(85);
worksheet.GetRange("A3").SetValue(70);
worksheet.GetRange("A4").SetValue(55);

let range = worksheet.GetRange("A2:A4");
let formatConditions = range.GetFormatConditions();
let iconCondition = formatConditions.AddIconSetCondition();

let criteria = iconCondition.GetIconCriteria();
let firstCriterion = criteria[0];
let criterionType = firstCriterion.GetType();

worksheet.GetRange("B1").SetValue("First criterion type: " + criterionType);

```
