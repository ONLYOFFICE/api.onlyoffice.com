# GetOperator

返回数据验证运算符。

## 语法

```javascript
expression.GetOperator();
```

`expression` - 表示 [ApiValidation](../ApiValidation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ValidationOperator](../../Enumeration/ValidationOperator.md)

## 示例

读取电子表格中单元格数据验证规则使用的比较运算符。

```javascript editor-xlsx
// How do I find out which condition operator is applied to a validated cell in a spreadsheet?

// Determine whether a validation rule uses greater-than, between, or another comparison type in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
let operator = validation.GetOperator();
worksheet.GetRange("B1").SetValue("Operator: " + operator);
```
