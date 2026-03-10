# SetDupeUnique

设置指定唯一值条件格式规则是格式化重复值还是唯一值的设置。

## 语法

```javascript
expression.SetDupeUnique(dupeUnique);
```

`expression` - 表示 [ApiUniqueValues](../ApiUniqueValues.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| dupeUnique | 必需 | [XlDuplicateValues](../../Enumeration/XlDuplicateValues.md) |  | 指定是格式化重复值还是唯一值。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例演示如何设置唯一值条件格式规则的重复/唯一值设置。

```javascript editor-xlsx
// How to change between highlighting unique or duplicate values.

// Set unique values rule to highlight duplicates instead.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Data");
worksheet.GetRange("A2").SetValue("Apple");
worksheet.GetRange("A3").SetValue("Banana");
worksheet.GetRange("A4").SetValue("Apple");
worksheet.GetRange("A5").SetValue("Orange");
worksheet.GetRange("A6").SetValue("Banana");

let range = worksheet.GetRange("A2:A6");
let formatConditions = range.GetFormatConditions();
let uniqueValuesCondition = formatConditions.AddUniqueValues();

let settingBefore = uniqueValuesCondition.GetDupeUnique();
uniqueValuesCondition.SetDupeUnique("xlDuplicate");
let settingAfter = uniqueValuesCondition.GetDupeUnique();

uniqueValuesCondition.SetFillColor(Api.CreateColorFromRGB(255, 0, 0));

worksheet.GetRange("C1").SetValue("Setting before: " + settingBefore);
worksheet.GetRange("C2").SetValue("Setting after: " + settingAfter);
worksheet.GetRange("C3").SetValue("Now highlighting duplicates");
```
