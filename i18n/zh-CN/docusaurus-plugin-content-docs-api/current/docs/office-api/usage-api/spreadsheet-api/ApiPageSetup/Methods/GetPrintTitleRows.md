# GetPrintTitleRows

返回在每个打印页顶部重复的行，如果没有则返回空字符串。

## 语法

```javascript
expression.GetPrintTitleRows();
```

`expression` - 表示 [ApiPageSetup](../ApiPageSetup.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

在电子表格中读取在每个打印页顶部重复的行。

```javascript editor-xlsx
// How do I find out which rows repeat on every printed page in a spreadsheet?

// Check the print title rows before printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetPrintTitleRows("$1:$1");
let rows = pageSetup.GetPrintTitleRows();
worksheet.GetRange("D1").SetValue("Print title rows: " + rows);
```
