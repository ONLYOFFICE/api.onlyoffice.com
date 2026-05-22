# GetShowInput

返回是否显示数据验证输入消息。

## 语法

```javascript
expression.GetShowInput();
```

`expression` - 表示 [ApiValidation](../ApiValidation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

检查电子表格中已验证的单元格是否开启了输入提示。

```javascript editor-xlsx
// How do I find out if a guidance message appears when someone selects a restricted cell in a spreadsheet?

// Confirm that a prompt will be shown to guide users before they enter a value in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetShowInput(true);
let showInput = validation.GetShowInput();
worksheet.GetRange("B1").SetValue("Show input: " + showInput);
```
