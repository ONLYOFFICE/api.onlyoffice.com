# GetLeftMargin

返回左边距的大小。

## 语法

```javascript
expression.GetLeftMargin();
```

`expression` - 表示 [ApiPageSetup](../ApiPageSetup.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

读取电子表格中工作表的左页边距并将其显示在单元格中。

```javascript editor-xlsx
// How do I find out the current left margin of a worksheet in a spreadsheet?

// Check the left page margin before printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetLeftMargin(20);
let margin = pageSetup.GetLeftMargin();
worksheet.GetRange("A1").SetValue("Left margin: " + margin + " mm");
```
