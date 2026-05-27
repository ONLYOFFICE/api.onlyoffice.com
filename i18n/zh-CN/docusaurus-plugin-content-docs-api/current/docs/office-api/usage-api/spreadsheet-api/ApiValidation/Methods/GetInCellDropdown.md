# GetInCellDropdown

返回数据验证是否显示包含可接受值的下拉列表。

## 语法

```javascript
expression.GetInCellDropdown();
```

`expression` - 表示 [ApiValidation](../ApiValidation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

检查电子表格中已验证的单元格是否显示用于选择值的下拉列表。

```javascript editor-xlsx
// How do I find out if a list validation rule displays a dropdown menu in a spreadsheet?

// Confirm whether users see a pick list when clicking on a cell with list-based validation in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateList", null, null, "Apple,Banana,Cherry");
let hasDropdown = validation.GetInCellDropdown();
worksheet.GetRange("B1").SetValue("Has dropdown: " + hasDropdown);
```
