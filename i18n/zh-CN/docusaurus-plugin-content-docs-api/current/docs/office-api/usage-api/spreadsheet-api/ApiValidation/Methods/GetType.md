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

读取限制电子表格中单元格接受哪些值的规则类型。

```javascript editor-xlsx
// How do I find out what type of data rule is applied to a cell in a spreadsheet?

// Identify whether a cell expects whole numbers, decimals, dates, or another category in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
let validationType = validation.GetType();
worksheet.GetRange("B1").SetValue("Validation type: " + validationType);
```
