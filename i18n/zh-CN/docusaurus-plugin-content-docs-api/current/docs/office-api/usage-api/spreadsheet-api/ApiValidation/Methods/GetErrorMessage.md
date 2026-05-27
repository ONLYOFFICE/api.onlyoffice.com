# GetErrorMessage

返回数据验证错误消息。

## 语法

```javascript
expression.GetErrorMessage();
```

`expression` - 表示 [ApiValidation](../ApiValidation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

读取电子表格中违反单元格验证规则时显示的错误消息。

```javascript editor-xlsx
// How do I find out what error message appears after an invalid entry in a spreadsheet?

// Retrieve the text displayed to users when they enter a value that fails validation in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetErrorMessage("Value must be greater than 10");
let errorMessage = validation.GetErrorMessage();
worksheet.GetRange("B1").SetValue("Error message: " + errorMessage);
```
