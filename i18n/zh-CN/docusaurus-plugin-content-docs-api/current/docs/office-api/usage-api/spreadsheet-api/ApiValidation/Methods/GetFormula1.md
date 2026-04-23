# GetFormula1

返回数据验证中的第一个公式。

## 语法

```javascript
expression.GetFormula1();
```

`expression` - 表示 [ApiValidation](../ApiValidation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

此示例获取数据验证中的第一个公式。

```javascript editor-xlsx
// How to retrieve the validation formula.

// Get the first formula.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
let formula1 = validation.GetFormula1();
worksheet.GetRange("B1").SetValue("Formula1: " + formula1);

```
