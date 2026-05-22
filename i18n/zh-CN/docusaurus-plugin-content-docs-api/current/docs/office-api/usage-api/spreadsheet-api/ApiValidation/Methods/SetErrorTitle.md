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

分配电子表格中无效单元格输入时出现的警报对话框标题文本。

```javascript editor-xlsx
// How do I set a custom title for the error popup that shows when validation fails in a spreadsheet?

// Label the error window with a meaningful heading so users immediately understand what went wrong in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetErrorTitle("Invalid Input");
validation.SetShowError(true);
worksheet.GetRange("B1").SetValue("Error title has been set");
```
