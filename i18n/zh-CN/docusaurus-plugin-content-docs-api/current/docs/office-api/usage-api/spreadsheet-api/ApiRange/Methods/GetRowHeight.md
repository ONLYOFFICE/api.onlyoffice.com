# GetRowHeight

返回行高值。

## 语法

```javascript
expression.GetRowHeight();
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[pt](../../Enumeration/pt.md)

## 示例

读取电子表格中行的高度。

```javascript editor-xlsx
// How do I find out how tall a row is in a spreadsheet?

// Capture the current row height and display it alongside the cell content in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let height = worksheet.GetRange("A1").GetRowHeight();
worksheet.GetRange("A1").SetValue("Height: ");
worksheet.GetRange("B1").SetValue(height);
```
