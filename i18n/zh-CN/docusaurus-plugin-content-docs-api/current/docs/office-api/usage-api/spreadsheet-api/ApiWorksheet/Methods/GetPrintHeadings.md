# GetPrintHeadings

返回页面 PrintHeadings 属性，该属性指定是否必须打印当前工作表的行/列标题。

## 语法

```javascript
expression.GetPrintHeadings();
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

检查电子表格中活动工作表是否设置为打印行列标题。

```javascript editor-xlsx
// How do I find out if row and column labels will appear on printed pages in a spreadsheet?

// Confirm the print-headings setting and write the result to a cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetPrintHeadings(true);
worksheet.GetRange("A1").SetValue("Row and column headings will be printed with this page: " + worksheet.GetPrintHeadings());
```
