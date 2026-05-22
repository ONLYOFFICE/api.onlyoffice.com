# SetIgnoreBlank

设置区域数据验证是否允许空值。

## 语法

```javascript
expression.SetIgnoreBlank(IgnoreBlank);
```

`expression` - 表示 [ApiValidation](../ApiValidation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| IgnoreBlank | 必需 | boolean |  | 指定是否允许空值。 |

## 返回值

此方法不返回任何数据。

## 示例

控制在电子表格中将已验证的单元格留空是否视为错误。

```javascript editor-xlsx
// How do I make a cell's validation rule apply even when the cell is left blank in a spreadsheet?

// Require users to fill in a restricted cell rather than allowing them to skip it in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetIgnoreBlank(false);
worksheet.GetRange("B1").SetValue("Blank values are not allowed");
```
