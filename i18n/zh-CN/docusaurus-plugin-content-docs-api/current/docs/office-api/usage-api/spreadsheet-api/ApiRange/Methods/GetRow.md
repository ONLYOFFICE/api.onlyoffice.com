# GetRow

返回所选单元格的行号。

## 语法

```javascript
expression.GetRow();
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

检索电子表格中单元格的行号。

```javascript editor-xlsx
// How do I find out which row a specific cell belongs to in a spreadsheet?

// Identify the position of a cell within the sheet by reading its row index in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A9").GetRow();
worksheet.GetRange("A2").SetValue(range.toString());
```
