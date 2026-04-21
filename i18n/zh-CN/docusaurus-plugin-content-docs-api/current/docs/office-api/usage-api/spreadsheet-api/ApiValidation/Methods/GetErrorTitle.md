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

获取电子表格中的错误消息标题。

```javascript editor-xlsx
// How to retrieve the validation error title in a spreadsheet.

// Get the error title and display the result in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetErrorTitle("Invalid Input");
let errorTitle = validation.GetErrorTitle();
worksheet.GetRange("B1").SetValue("Error title: " + errorTitle);
```
