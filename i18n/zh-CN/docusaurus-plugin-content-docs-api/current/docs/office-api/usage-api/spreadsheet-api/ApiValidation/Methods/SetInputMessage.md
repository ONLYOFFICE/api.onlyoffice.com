# SetInputMessage

设置数据验证输入消息。

## 语法

```javascript
expression.SetInputMessage(InputMessage);
```

`expression` - 表示 [ApiValidation](../ApiValidation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| InputMessage | 必需 | string |  | 输入消息。 |

## 返回值

此方法不返回任何数据。

## 示例

This example sets the input message text.

```javascript editor-xlsx
// How to set the validation input message.

// Set the input message.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetInputMessage("Please enter a value greater than 10");
validation.SetShowInput(true);
worksheet.GetRange("B1").SetValue("Input message has been set");

```
