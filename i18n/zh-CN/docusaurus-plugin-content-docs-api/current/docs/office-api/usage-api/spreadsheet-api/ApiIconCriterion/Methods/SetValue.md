# SetValue

设置图标条件的阈值。

## 语法

```javascript
expression.SetValue(value);
```

`expression` - 表示 [ApiIconCriterion](../ApiIconCriterion.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| value | 必需 | string \| number |  | 要设置的阈值。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例演示如何设置图标条件的值。

```javascript editor-xlsx
// How to modify the threshold value for an icon set criterion.

// Set the value used for criterion threshold comparison.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Performance");
worksheet.GetRange("A2").SetValue(95);
worksheet.GetRange("A3").SetValue(78);
worksheet.GetRange("A4").SetValue(62);
worksheet.GetRange("A5").SetValue(45);

let range = worksheet.GetRange("A2:A5");
let formatConditions = range.GetFormatConditions();
let iconCondition = formatConditions.AddIconSetCondition();

let criteria = iconCondition.GetIconCriteria();
worksheet.GetRange("B1").SetValue("Before: Default threshold values");

criteria[1].SetValue("80");
worksheet.GetRange("B2").SetValue("After: Second threshold set to 80");

```
