# SetInputTitle

设置数据验证输入对话框的标题。

## 语法

```javascript
expression.SetInputTitle(InputTitle);
```

`expression` - 表示 [ApiValidation](../ApiValidation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| InputTitle | 必需 | string |  | 输入对话框标题。 |

## 返回值

此方法不返回任何数据。

## 示例

This example sets the input message title.

```javascript editor-xlsx
// How to set the validation input title.

// Set the input title.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetInputTitle("Enter Value");
validation.SetShowInput(true);
worksheet.GetRange("B1").SetValue("Input title has been set");

```
