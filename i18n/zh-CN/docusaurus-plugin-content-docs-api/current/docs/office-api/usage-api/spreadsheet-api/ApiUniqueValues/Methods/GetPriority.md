# GetPriority

返回条件格式规则的优先级值。

继承自 [ApiFormatCondition.GetPriority](../../ApiFormatCondition/Methods/GetPriority.md)。

## 语法

```javascript
expression.GetPriority();
```

`expression` - 表示 [ApiUniqueValues](../ApiUniqueValues.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

在电子表格中读取唯一值条件格式规则的计算优先级。

```javascript editor-xlsx
// How do I check the order in which a unique-values rule is evaluated against other rules in a spreadsheet?

// Confirm the precedence number of a unique-values rule to understand its position in the formatting queue in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Data");
worksheet.GetRange("A2").SetValue("Apple");
worksheet.GetRange("A3").SetValue("Banana");
worksheet.GetRange("A4").SetValue("Apple");
worksheet.GetRange("A5").SetValue("Orange");

let range = worksheet.GetRange("A2:A5");
let formatConditions = range.GetFormatConditions();
let uniqueValuesCondition = formatConditions.AddUniqueValues();

let priority = uniqueValuesCondition.GetPriority();

worksheet.GetRange("C1").SetValue("Priority:");
worksheet.GetRange("C2").SetValue(priority);
```
