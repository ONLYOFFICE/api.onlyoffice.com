# GetOddAndEvenPagesHeaderFooter

返回奇数页和偶数页是否使用不同的页眉和页脚。

## 语法

```javascript
expression.GetOddAndEvenPagesHeaderFooter();
```

`expression` - 表示 [ApiPageSetup](../ApiPageSetup.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

在电子表格中检查奇数页和偶数页是否使用不同的页眉和页脚。

```javascript editor-xlsx
// How do I find out if odd and even pages have separate headers/footers in a spreadsheet?

// Read the odd/even page header/footer setting before printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetOddAndEvenPagesHeaderFooter(true);
let isDifferent = pageSetup.GetOddAndEvenPagesHeaderFooter();
worksheet.GetRange("A1").SetValue("Different odd/even headers and footers: " + isDifferent);
```
