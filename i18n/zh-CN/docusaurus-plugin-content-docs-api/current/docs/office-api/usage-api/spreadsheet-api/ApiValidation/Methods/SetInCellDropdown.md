# SetInCellDropdown

设置数据验证是否显示包含可接受值的下拉列表。

## 语法

```javascript
expression.SetInCellDropdown(InCellDropdown);
```

`expression` - 表示 [ApiValidation](../ApiValidation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| InCellDropdown | 必需 | boolean |  | 指定是否显示下拉列表。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例设置是否显示下拉列表。

```javascript editor-xlsx
// How to show or hide the validation dropdown list.

// Set the InCellDropdown setting.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateList", null, null, "Apple,Banana,Cherry");
validation.SetInCellDropdown(true);
worksheet.GetRange("B1").SetValue("Dropdown is enabled for A1");

```
