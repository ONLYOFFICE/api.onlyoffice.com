# GetCol

返回所选单元格的列号。

## 语法

```javascript
expression.GetCol();
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

查找电子表格中特定单元格的列号。

```javascript editor-xlsx
// How do I find which column number a cell belongs to in a spreadsheet?

// Read a cell's column position and print that number onto the sheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("D9").GetCol();
worksheet.GetRange("A2").SetValue(range.toString());
```
