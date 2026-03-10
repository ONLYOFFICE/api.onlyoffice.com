# SetIcon

设置当前图标条件的图标。

## 语法

```javascript
expression.SetIcon(icon);
```

`expression` - 表示 [ApiIconCriterion](../ApiIconCriterion.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| icon | 必需 | [XlIcon](../../Enumeration/XlIcon.md) |  | 要设置的图标常量。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例演示如何更改条件的图标。

```javascript editor-xlsx
// How to modify the icon assigned to an icon set criterion.

// Set a custom icon for this criterion threshold.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Status");
worksheet.GetRange("A2").SetValue(85);
worksheet.GetRange("A3").SetValue(65);
worksheet.GetRange("A4").SetValue(45);

let range = worksheet.GetRange("A2:A4");
let formatConditions = range.GetFormatConditions();
let iconCondition = formatConditions.AddIconSetCondition();

let criteria = iconCondition.GetIconCriteria();
worksheet.GetRange("B1").SetValue("Before: Default icons");

criteria[0].SetIcon("xlIconRedFlag");
worksheet.GetRange("B2").SetValue("After: First icon changed to red flag");

```
