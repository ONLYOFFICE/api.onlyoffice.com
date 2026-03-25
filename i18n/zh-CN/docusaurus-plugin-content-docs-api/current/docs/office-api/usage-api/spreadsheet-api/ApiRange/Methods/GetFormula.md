# GetFormula

返回指定范围的公式。

## 语法

```javascript
expression.GetFormula();
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string \| string[][]

## 示例

此示例演示如何获取指定范围的公式。

```javascript editor-xlsx
// How to find out a range formula.

// Get a range, get its cell formula and show it in the worksheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("B1").SetValue(1);
worksheet.GetRange("C1").SetValue(2);
let range = worksheet.GetRange("A1");
range.SetValue("=SUM(B1:C1)");
let formula = range.GetFormula();
worksheet.GetRange("A3").SetValue("Formula from cell A1: " + formula);
```
