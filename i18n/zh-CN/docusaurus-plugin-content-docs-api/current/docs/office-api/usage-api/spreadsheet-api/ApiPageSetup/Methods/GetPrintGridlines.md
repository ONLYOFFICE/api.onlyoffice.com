# GetPrintGridlines

返回是否随工作表一起打印单元格网格线。

## 语法

```javascript
expression.GetPrintGridlines();
```

`expression` - 表示 [ApiPageSetup](../ApiPageSetup.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

在电子表格中检查是否随工作表一起打印单元格网格线。

```javascript editor-xlsx
// How do I find out if gridlines will appear on the printout in a spreadsheet?

// Read the print-gridlines setting before printing a worksheet in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetPrintGridlines(true);
let value = pageSetup.GetPrintGridlines();
worksheet.GetRange("A1").SetValue("Print gridlines: " + value);
```
