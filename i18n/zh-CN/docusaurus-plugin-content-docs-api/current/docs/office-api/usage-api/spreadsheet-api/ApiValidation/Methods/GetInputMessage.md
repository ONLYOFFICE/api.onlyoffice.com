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

读取用户选择电子表格中已验证单元格时出现的指导消息。

```javascript editor-xlsx
// How do I find out what instruction text is shown when clicking on a cell with a validation rule in a spreadsheet?

// Retrieve the tooltip message displayed to guide users entering data into a restricted cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetInputMessage("Enter a number greater than 10");
let inputMessage = validation.GetInputMessage();
worksheet.GetRange("B1").SetValue("Input message: " + inputMessage);
```
