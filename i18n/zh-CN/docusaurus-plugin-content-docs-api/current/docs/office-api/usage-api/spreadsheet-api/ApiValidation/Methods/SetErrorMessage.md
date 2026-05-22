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

分配在电子表格中输入无效值时出现的警报正文文本。

```javascript editor-xlsx
// How do I write a custom explanation that pops up when a cell entry fails validation in a spreadsheet?

// Give users a clear reason why their input was rejected by defining the alert text in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetErrorMessage("The value must be greater than 10");
validation.SetShowError(true);
worksheet.GetRange("B1").SetValue("Error message has been set");
```
