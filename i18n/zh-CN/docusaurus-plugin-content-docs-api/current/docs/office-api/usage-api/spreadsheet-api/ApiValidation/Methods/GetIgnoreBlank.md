# GetIgnoreBlank

返回区域数据验证是否允许空值。

## 语法

```javascript
expression.GetIgnoreBlank();
```

`expression` - 表示 [ApiValidation](../ApiValidation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

检查电子表格中空单元格是否允许绕过验证规则。

```javascript editor-xlsx
// How do I find out if blank entries are permitted in a validated cell in a spreadsheet?

// Confirm whether leaving a cell empty skips the validation check in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetIgnoreBlank(true);
let ignoreBlank = validation.GetIgnoreBlank();
worksheet.GetRange("B1").SetValue("Ignore blank: " + ignoreBlank);
```
