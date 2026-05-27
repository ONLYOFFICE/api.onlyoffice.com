# GetInputTitle

返回数据验证输入对话框的标题。

## 语法

```javascript
expression.GetInputTitle();
```

`expression` - 表示 [ApiValidation](../ApiValidation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

读取选择电子表格中已验证单元格时显示的指导工具提示标题。

```javascript editor-xlsx
// How do I find out what title appears on the input prompt for a cell with a validation rule in a spreadsheet?

// Confirm the label used at the top of the input message box assigned to a restricted cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetInputTitle("Enter Value");
let inputTitle = validation.GetInputTitle();
worksheet.GetRange("B1").SetValue("Input title: " + inputTitle);
```
