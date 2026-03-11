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

此示例获取验证警告样式。

```javascript editor-xlsx
// How to retrieve the validation alert style.

// Get the validation alert style.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertWarning", "xlGreater", 10);
let alertStyle = validation.GetAlertStyle();
worksheet.GetRange("B1").SetValue("Alert style: " + alertStyle);

```
