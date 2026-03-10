# GetType

返回验证类型。

## 语法

```javascript
expression.GetType();
```

`expression` - 表示 [ApiValidation](../ApiValidation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ValidationType](../../Enumeration/ValidationType.md)

## 示例

This example gets the validation type.

```javascript editor-xlsx
// How to retrieve the validation type.

// Get the validation type.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
let validationType = validation.GetType();
worksheet.GetRange("B1").SetValue("Validation type: " + validationType);

```
