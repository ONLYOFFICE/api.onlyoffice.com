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

读取电子表格中违反验证规则时显示的错误对话框标题。

```javascript editor-xlsx
// How do I find out what heading appears on the error popup for a validated cell in a spreadsheet?

// Confirm the caption used in the error alert box assigned to a cell's rule in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetErrorTitle("Invalid Input");
let errorTitle = validation.GetErrorTitle();
worksheet.GetRange("B1").SetValue("Error title: " + errorTitle);
```
