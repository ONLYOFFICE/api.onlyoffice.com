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

为用户选择电子表格中已验证单元格时出现的提示框分配标题。

```javascript editor-xlsx
// How do I add a title to the tooltip that guides users when they click on a restricted cell in a spreadsheet?

// Name the input prompt so users know at a glance what kind of value a cell expects in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetInputTitle("Enter Value");
validation.SetShowInput(true);
worksheet.GetRange("B1").SetValue("Input title has been set");
```
