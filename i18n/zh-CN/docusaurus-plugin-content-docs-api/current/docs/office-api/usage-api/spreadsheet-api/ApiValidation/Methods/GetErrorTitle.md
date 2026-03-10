# GetErrorTitle

返回数据验证错误对话框的标题。

## 语法

```javascript
expression.GetErrorTitle();
```

`expression` - 表示 [ApiValidation](../ApiValidation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

This example gets the error message title.

```javascript editor-xlsx
// How to retrieve the validation error title.

// Get the error title.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetErrorTitle("Invalid Input");
let errorTitle = validation.GetErrorTitle();
worksheet.GetRange("B1").SetValue("Error title: " + errorTitle);

```
