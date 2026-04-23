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

此示例获取是否显示下拉列表。

```javascript editor-xlsx
// How to check if validation displays a dropdown list.

// Get the InCellDropdown setting.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateList", null, null, "Apple,Banana,Cherry");
let hasDropdown = validation.GetInCellDropdown();
worksheet.GetRange("B1").SetValue("Has dropdown: " + hasDropdown);

```
