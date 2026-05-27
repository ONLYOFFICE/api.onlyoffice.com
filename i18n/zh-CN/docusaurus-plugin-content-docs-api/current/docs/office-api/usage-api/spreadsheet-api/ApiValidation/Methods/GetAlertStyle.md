# GetAlertStyle

返回验证警报样式。

## 语法

```javascript
expression.GetAlertStyle();
```

`expression` - 表示 [ApiValidation](../ApiValidation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ValidationAlertStyle](../../Enumeration/ValidationAlertStyle.md)

## 示例

读取电子表格中验证规则上设置的警报样式。

```javascript editor-xlsx
// How do I check what kind of alert appears when invalid data is entered in a spreadsheet?

// Inspect the warning type assigned to a cell's data validation rule in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertWarning", "xlGreater", 10);
let alertStyle = validation.GetAlertStyle();
worksheet.GetRange("B1").SetValue("Alert style: " + alertStyle);
```
