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

This example gets the input message title.

```javascript editor-xlsx
// How to retrieve the validation input title.

// Get the input title.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetInputTitle("Enter Value");
let inputTitle = validation.GetInputTitle();
worksheet.GetRange("B1").SetValue("Input title: " + inputTitle);

```
