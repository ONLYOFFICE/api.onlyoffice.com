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

获取电子表格中指定工作表行/列标题是否必须打印的页面 PrintHeadings 属性。

```javascript editor-xlsx
// How to find out whether sheet headings should be printed or not in a spreadsheet.

// Get a boolean value representing whether to print row and column headings or not in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetPrintHeadings(true);
worksheet.GetRange("A1").SetValue("Row and column headings will be printed with this page: " + worksheet.GetPrintHeadings());
```
