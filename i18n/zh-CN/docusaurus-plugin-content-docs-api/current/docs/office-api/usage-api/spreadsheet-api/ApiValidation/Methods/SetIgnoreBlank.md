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

This example sets whether blank values are permitted.

```javascript editor-xlsx
// How to allow or disallow blank values in validation.

// Set the IgnoreBlank setting.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetIgnoreBlank(false);
worksheet.GetRange("B1").SetValue("Blank values are not allowed");

```
