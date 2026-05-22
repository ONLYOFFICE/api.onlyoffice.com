# GetColumnWidth

返回列宽值。

## 语法

```javascript
expression.GetColumnWidth();
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

读取列的宽度并在电子表格的工作表上显示值。

```javascript editor-xlsx
// How do I find out the current width of a column in a spreadsheet?

// Measure a column's width and record that measurement in a nearby cell.

let worksheet = Api.GetActiveSheet();
let width = worksheet.GetRange("A1").GetColumnWidth();
worksheet.GetRange("A1").SetValue("Width: ");
worksheet.GetRange("B1").SetValue(width);
```
