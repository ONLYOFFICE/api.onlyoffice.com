# GetTopMargin

返回上边距的大小。

## 语法

```javascript
expression.GetTopMargin();
```

`expression` - 表示 [ApiPageSetup](../ApiPageSetup.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

读取电子表格中工作表的上页边距并将其显示在单元格中。

```javascript editor-xlsx
// How do I find out the current top margin of a worksheet in a spreadsheet?

// Check the top page margin before printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetTopMargin(20);
let margin = pageSetup.GetTopMargin();
worksheet.GetRange("A1").SetValue("Top margin: " + margin + " mm");
```
