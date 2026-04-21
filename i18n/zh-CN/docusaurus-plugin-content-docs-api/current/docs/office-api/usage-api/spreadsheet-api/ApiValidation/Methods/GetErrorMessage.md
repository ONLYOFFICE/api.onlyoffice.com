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

获取电子表格中的错误消息文本。

```javascript editor-xlsx
// How to retrieve the validation error message in a spreadsheet.

// Get the error message using the validation API in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetErrorMessage("Value must be greater than 10");
let errorMessage = validation.GetErrorMessage();
worksheet.GetRange("B1").SetValue("Error message: " + errorMessage);
```
