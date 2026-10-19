# GetPrintHeadings

返回是否随工作表一起打印行标题和列标题。

## 语法

```javascript
expression.GetPrintHeadings();
```

`expression` - 表示 [ApiPageSetup](../ApiPageSetup.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

在电子表格中检查是否随工作表一起打印行标题和列标题。

```javascript editor-xlsx
// How do I find out if row numbers and column letters will appear on the printout in a spreadsheet?

// Read the print-headings setting before printing a worksheet in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetPrintHeadings(true);
let value = pageSetup.GetPrintHeadings();
worksheet.GetRange("A1").SetValue("Print headings: " + value);
```
