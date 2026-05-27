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

读取电子表格中单元格存储的公式。

```javascript editor-xlsx
// How do I find out what formula a cell contains in a spreadsheet?

// Display a cell's formula as text in another cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("B1").SetValue(1);
worksheet.GetRange("C1").SetValue(2);
let range = worksheet.GetRange("A1");
range.SetValue("=SUM(B1:C1)");
let formula = range.GetFormula();
worksheet.GetRange("A3").SetValue("Formula from cell A1: " + formula);
```
