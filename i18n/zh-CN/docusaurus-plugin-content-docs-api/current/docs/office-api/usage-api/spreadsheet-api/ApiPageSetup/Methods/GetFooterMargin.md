# GetFooterMargin

返回页面底部到页脚的距离。

## 语法

```javascript
expression.GetFooterMargin();
```

`expression` - 表示 [ApiPageSetup](../ApiPageSetup.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

读取电子表格中工作表的页脚边距并将其显示在单元格中。

```javascript editor-xlsx
// How do I find out the current footer margin (distance to the footer) in a spreadsheet?

// Check the spacing reserved for the page footer before printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetFooterMargin(12.7);
let footerMargin = pageSetup.GetFooterMargin();
worksheet.GetRange("A1").SetValue("Footer margin: " + footerMargin + " mm");
```
