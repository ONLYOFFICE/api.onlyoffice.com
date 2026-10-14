# GetHeaderMargin

返回页面顶部到页眉的距离。

## 语法

```javascript
expression.GetHeaderMargin();
```

`expression` - 表示 [ApiPageSetup](../ApiPageSetup.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

读取电子表格中工作表的页眉边距并将其显示在单元格中。

```javascript editor-xlsx
// How do I find out the current header margin (distance to the header) in a spreadsheet?

// Check the spacing reserved for the page header before printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetHeaderMargin(12.7);
let headerMargin = pageSetup.GetHeaderMargin();
worksheet.GetRange("A1").SetValue("Header margin: " + headerMargin + " mm");
```
