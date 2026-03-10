# GetParent

返回父区域对象。

## 语法

```javascript
expression.GetParent();
```

`expression` - 表示 [ApiValidation](../ApiValidation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiRange](../../ApiRange/ApiRange.md)

## 示例

This example gets the parent range of the validation.

```javascript editor-xlsx
// How to retrieve the validation parent range.

// Get the parent range.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1:A5");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
let parent = validation.GetParent();
worksheet.GetRange("B1").SetValue("Parent range: " + parent.GetAddress());

```
