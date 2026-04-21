# GetInputMessage

返回数据验证输入消息。

## 语法

```javascript
expression.GetInputMessage();
```

`expression` - 表示 [ApiValidation](../ApiValidation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

获取电子表格中的输入消息文本。

```javascript editor-xlsx
// How to retrieve the validation input message in a spreadsheet.

// Get the input message using the validation API in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetInputMessage("Enter a number greater than 10");
let inputMessage = validation.GetInputMessage();
worksheet.GetRange("B1").SetValue("Input message: " + inputMessage);
```
