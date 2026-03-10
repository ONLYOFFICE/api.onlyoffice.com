# SetErrorTitle

设置数据验证错误对话框的标题。

## 语法

```javascript
expression.SetErrorTitle(ErrorTitle);
```

`expression` - 表示 [ApiValidation](../ApiValidation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| ErrorTitle | 必需 | string |  | 错误对话框标题。 |

## 返回值

此方法不返回任何数据。

## 示例

This example sets the error message title.

```javascript editor-xlsx
// How to set the validation error title.

// Set the error title.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetErrorTitle("Invalid Input");
validation.SetShowError(true);
worksheet.GetRange("B1").SetValue("Error title has been set");

```
