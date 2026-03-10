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

This example gets the data validation operator.

```javascript editor-xlsx
// How to retrieve the validation operator.

// Get the operator.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
let operator = validation.GetOperator();
worksheet.GetRange("B1").SetValue("Operator: " + operator);

```
