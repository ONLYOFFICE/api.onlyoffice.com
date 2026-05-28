# SetShowError

设置是否显示数据验证错误消息。

## 语法

```javascript
expression.SetShowError(ShowError);
```

`expression` - 表示 [ApiValidation](../ApiValidation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| ShowError | 必需 | boolean |  | 指定是否显示错误消息。 |

## 返回值

此方法不返回任何数据。

## 示例

为电子表格中具有验证规则的单元格打开或关闭错误警报。

```javascript editor-xlsx
// How do I make sure an error popup appears whenever someone enters a value that breaks a rule in a spreadsheet?

// Decide whether users see a warning when their input does not meet the required criteria in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetErrorTitle("Error Title");
validation.SetErrorMessage("Invalid value entered");
validation.SetShowError(true);
worksheet.GetRange("B1").SetValue("Error message will be shown");
```
