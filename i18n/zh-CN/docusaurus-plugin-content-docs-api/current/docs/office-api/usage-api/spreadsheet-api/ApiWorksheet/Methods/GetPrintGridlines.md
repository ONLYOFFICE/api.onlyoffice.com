# GetPrintGridlines

返回页面 PrintGridlines 属性，该属性指定是否必须打印当前工作表网格线。

## 语法

```javascript
expression.GetPrintGridlines();
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

检查电子表格中活动工作表是否设置为打印单元格网格线。

```javascript editor-xlsx
// How do I find out if gridlines will appear on printed pages in a spreadsheet?

// Verify the print-gridlines setting and display the result in a cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetPrintGridlines(true);
worksheet.GetRange("A1").SetValue("Gridlines of cells will be printed on this page: " + worksheet.GetPrintGridlines());
```
