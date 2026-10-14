# GetAlignMarginsHeaderFooter

返回页眉和页脚边距是否与页边距对齐。

## 语法

```javascript
expression.GetAlignMarginsHeaderFooter();
```

`expression` - 表示 [ApiPageSetup](../ApiPageSetup.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

在电子表格中检查页眉和页脚是否与页边距对齐。

```javascript editor-xlsx
// How do I find out if the header and footer line up with the page margins in a spreadsheet?

// Read the current header and footer margin alignment setting before printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetAlignMarginsHeaderFooter(true);
let isAligned = pageSetup.GetAlignMarginsHeaderFooter();
worksheet.GetRange("A1").SetValue("Align header/footer with margins: " + isAligned);
```
