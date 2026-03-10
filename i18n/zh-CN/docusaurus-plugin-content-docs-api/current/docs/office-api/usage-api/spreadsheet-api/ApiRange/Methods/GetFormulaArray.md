# GetFormulaArray

返回当前范围的数组公式。

## 语法

```javascript
expression.GetFormulaArray();
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string \| null

## 示例

此示例演示如何获取范围的数组公式。

```javascript editor-xlsx
// How to get an array formula value.

// Get a range, get its array formula value and show it in the worksheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1:A3").SetFormulaArray("={1;2;3}");
let value = worksheet.GetRange("A1").GetFormulaArray();
worksheet.GetRange("A4").SetValue("Array formula of the cell A1: ");
worksheet.GetRange("B4").SetValue("'" + value);
value = worksheet.GetRange("A2").GetFormulaArray();
worksheet.GetRange("A5").SetValue("Array formula of the cell A2: ");
worksheet.GetRange("B5").SetValue("'" + value);
value = worksheet.GetRange("A3").GetFormulaArray();
worksheet.GetRange("A6").SetValue("Array formula of the cell A3: ");
worksheet.GetRange("B6").SetValue("'" + value);
```
