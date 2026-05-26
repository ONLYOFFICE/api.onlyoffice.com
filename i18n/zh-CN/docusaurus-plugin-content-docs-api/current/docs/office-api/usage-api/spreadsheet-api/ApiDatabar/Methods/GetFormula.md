# GetFormula

返回数据条的公式。

## 语法

```javascript
expression.GetFormula();
```

`expression` - 表示 [ApiDatabar](../ApiDatabar.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

读取驱动电子表格中数据条规则的公式。

```javascript editor-xlsx
// How do I retrieve the formula expression tied to a data bar in a spreadsheet?

// Examine the calculation behind a data bar condition to understand its logic in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");
let formatConditions = dataRange.GetFormatConditions();

let dataBar = formatConditions.AddDatabar();

let formula = dataBar.GetFormula();

worksheet.GetRange("C1").SetValue("Formula:");
worksheet.GetRange("C2").SetValue(formula || "None");
```
