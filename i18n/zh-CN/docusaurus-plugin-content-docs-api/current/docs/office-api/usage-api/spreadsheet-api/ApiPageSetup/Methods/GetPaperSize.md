# GetPaperSize

返回打印工作表时使用的纸张大小。

## 语法

```javascript
expression.GetPaperSize();
```

`expression` - 表示 [ApiPageSetup](../ApiPageSetup.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[PaperSize](../../Enumeration/PaperSize.md)

## 示例

读取电子表格中打印工作表时使用的纸张大小。

```javascript editor-xlsx
// How do I find out the print paper size of a worksheet in a spreadsheet?

// Check the current paper format before printing a worksheet in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetPaperSize("xlPaperA4");
let paperSize = pageSetup.GetPaperSize();
worksheet.GetRange("A1").SetValue("Paper size: " + paperSize);
```
