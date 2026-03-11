# SetErrorMessage

设置数据验证错误消息。

## 语法

```javascript
expression.SetErrorMessage(ErrorMessage);
```

`expression` - 表示 [ApiValidation](../ApiValidation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| ErrorMessage | 必需 | string |  | 错误消息。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例设置错误消息文本。

```javascript editor-xlsx
// How to set the validation error message.

// Set the error message.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetErrorMessage("The value must be greater than 10");
validation.SetShowError(true);
worksheet.GetRange("B1").SetValue("Error message has been set");

```
