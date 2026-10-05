# SetPriority

设置条件格式规则的优先级值。

继承自 [ApiFormatCondition.SetPriority](../../ApiFormatCondition/Methods/SetPriority.md)。

## 语法

```javascript
expression.SetPriority(Priority);
```

`expression` - 表示 [ApiUniqueValues](../ApiUniqueValues.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Priority | 必需 | number |  | 优先级值（从 1 开始）。 |

## 返回值

此方法不返回任何数据。

## 示例

在电子表格中为唯一值格式规则分配特定的计算优先级。

```javascript editor-xlsx
// How do I set the exact priority number of a unique values formatting rule in a spreadsheet?

// Control the order in which a unique values rule is applied relative to others in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Data");
worksheet.GetRange("A2").SetValue("Apple");
worksheet.GetRange("A3").SetValue("Banana");
worksheet.GetRange("A4").SetValue("Apple");
worksheet.GetRange("A5").SetValue("Orange");

let range = worksheet.GetRange("A2:A5");
let formatConditions = range.GetFormatConditions();
let uniqueValuesCondition = formatConditions.AddUniqueValues();

uniqueValuesCondition.SetPriority(5);

let priority = uniqueValuesCondition.GetPriority();

worksheet.GetRange("C1").SetValue("New priority:");
worksheet.GetRange("C2").SetValue(priority);
```
