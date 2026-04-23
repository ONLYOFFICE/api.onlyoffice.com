# GetIgnoreBlank

返回区域数据验证是否允许空值。

## 语法

```javascript
expression.GetIgnoreBlank();
```

`expression` - 表示 [ApiValidation](../ApiValidation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

此示例获取是否允许空白值。

```javascript editor-xlsx
// How to check if blank values are allowed in validation.

// Get the IgnoreBlank setting.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetIgnoreBlank(true);
let ignoreBlank = validation.GetIgnoreBlank();
worksheet.GetRange("B1").SetValue("Ignore blank: " + ignoreBlank);

```
