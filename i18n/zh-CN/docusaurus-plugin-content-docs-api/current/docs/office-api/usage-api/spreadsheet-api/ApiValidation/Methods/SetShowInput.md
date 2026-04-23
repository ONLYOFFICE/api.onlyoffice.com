# SetShowInput

设置是否显示数据验证输入消息。

## 语法

```javascript
expression.SetShowInput(ShowInput);
```

`expression` - 表示 [ApiValidation](../ApiValidation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| ShowInput | 必需 | boolean |  | 指定是否显示输入消息。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例设置是否显示输入消息。

```javascript editor-xlsx
// How to show or hide the validation input message.

// Set the ShowInput setting.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetInputTitle("Input Title");
validation.SetInputMessage("Please enter a number greater than 10");
validation.SetShowInput(true);
worksheet.GetRange("B1").SetValue("Input message will be shown");

```
