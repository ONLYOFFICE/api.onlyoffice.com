# GetFitToPagesWide

返回打印时工作表缩放到的页宽数（0 表示自动）。

## 语法

```javascript
expression.GetFitToPagesWide();
```

`expression` - 表示 [ApiPageSetup](../ApiPageSetup.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

在电子表格中读取打印输出缩放到的页宽数。

```javascript editor-xlsx
// How do I find out the fit-to-pages-wide setting before printing in a spreadsheet?

// Check the horizontal fit-to-page scaling (0 means automatic) in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetFitToPagesWide(1);
let wide = pageSetup.GetFitToPagesWide();
worksheet.GetRange("A1").SetValue("Fit to pages wide: " + wide);
```
