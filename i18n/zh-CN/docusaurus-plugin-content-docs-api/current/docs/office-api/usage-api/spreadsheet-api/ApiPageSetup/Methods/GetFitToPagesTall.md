# GetFitToPagesTall

返回打印时工作表缩放到的页高数（0 表示自动）。

## 语法

```javascript
expression.GetFitToPagesTall();
```

`expression` - 表示 [ApiPageSetup](../ApiPageSetup.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

在电子表格中读取打印输出缩放到的页高数。

```javascript editor-xlsx
// How do I find out the fit-to-pages-tall setting before printing in a spreadsheet?

// Check the vertical fit-to-page scaling (0 means automatic) in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetFitToPagesTall(2);
let tall = pageSetup.GetFitToPagesTall();
worksheet.GetRange("A1").SetValue("Fit to pages tall: " + tall);
```
