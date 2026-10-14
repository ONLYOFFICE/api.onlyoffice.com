# GetPrintTitleColumns

返回在每个打印页左侧重复的列，如果没有则返回空字符串。

## 语法

```javascript
expression.GetPrintTitleColumns();
```

`expression` - 表示 [ApiPageSetup](../ApiPageSetup.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

在电子表格中读取在每个打印页左侧重复的列。

```javascript editor-xlsx
// How do I find out which columns repeat on every printed page in a spreadsheet?

// Check the print title columns before printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetPrintTitleColumns("$A:$A");
let cols = pageSetup.GetPrintTitleColumns();
worksheet.GetRange("D1").SetValue("Print title columns: " + cols);
```
