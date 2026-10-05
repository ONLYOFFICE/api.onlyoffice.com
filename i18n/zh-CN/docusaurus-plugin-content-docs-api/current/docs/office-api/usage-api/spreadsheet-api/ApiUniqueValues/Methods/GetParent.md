# GetParent

返回当前格式条件的父区域对象。

继承自 [ApiFormatCondition.GetParent](../../ApiFormatCondition/Methods/GetParent.md)。

## 语法

```javascript
expression.GetParent();
```

`expression` - 表示 [ApiUniqueValues](../ApiUniqueValues.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiRange](../../ApiRange/ApiRange.md)

## 示例

在电子表格中获取拥有唯一值条件格式规则的区域。

```javascript editor-xlsx
// How do I find the parent range of a unique-values formatting rule in a spreadsheet?

// Trace a unique-values rule back to the range it belongs to in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Data");
worksheet.GetRange("A2").SetValue("Apple");
worksheet.GetRange("A3").SetValue("Banana");
worksheet.GetRange("A4").SetValue("Apple");
worksheet.GetRange("A5").SetValue("Orange");

let range = worksheet.GetRange("A2:A5");
let formatConditions = range.GetFormatConditions();
let uniqueValuesCondition = formatConditions.AddUniqueValues();

let parent = uniqueValuesCondition.GetParent();
let parentAddress = parent.GetAddress();

worksheet.GetRange("C1").SetValue("Parent range:");
worksheet.GetRange("C2").SetValue(parentAddress);
```
