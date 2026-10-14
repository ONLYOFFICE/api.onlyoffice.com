# GetPrintArea

以字符串形式返回要打印的范围（打印区域），打印整个工作表时返回空字符串。

## 语法

```javascript
expression.GetPrintArea();
```

`expression` - 表示 [ApiPageSetup](../ApiPageSetup.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

读取电子表格中工作表的打印区域（要打印的范围）。

```javascript editor-xlsx
// How do I find out which range is set as the print area in a spreadsheet?

// Check the current print area (empty means the whole sheet) before printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetPrintArea("A1:D20");
let printArea = pageSetup.GetPrintArea();
worksheet.GetRange("F1").SetValue("Print area: " + printArea);
```
