# GetType

返回唯一值条件格式规则的类型。

## 语法

```javascript
expression.GetType();
```

`expression` - 表示 [ApiUniqueValues](../ApiUniqueValues.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[XlFormatConditionType](../../Enumeration/XlFormatConditionType.md)

## 示例

此示例演示如何获取唯一值条件格式规则的类型。

```javascript editor-xlsx
// How to retrieve the formatting rule type from unique values conditional formatting.

// Get the type of the unique values rule.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Data");
worksheet.GetRange("A2").SetValue("Apple");
worksheet.GetRange("A3").SetValue("Banana");
worksheet.GetRange("A4").SetValue("Apple");
worksheet.GetRange("A5").SetValue("Orange");

let range = worksheet.GetRange("A2:A5");
let formatConditions = range.GetFormatConditions();
let uniqueValuesCondition = formatConditions.AddUniqueValues();

let type = uniqueValuesCondition.GetType();
worksheet.GetRange("B1").SetValue("Rule type: " + type);

```
