# GetFormula2

返回数据验证中的第二个公式。

## 语法

```javascript
expression.GetFormula2();
```

`expression` - 表示 [ApiValidation](../ApiValidation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

This example gets the second formula in data validation.

```javascript editor-xlsx
// How to retrieve the second validation formula.

// Get the second formula.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlBetween", 10, 20);
let formula2 = validation.GetFormula2();
worksheet.GetRange("B1").SetValue("Formula2: " + formula2);

```
