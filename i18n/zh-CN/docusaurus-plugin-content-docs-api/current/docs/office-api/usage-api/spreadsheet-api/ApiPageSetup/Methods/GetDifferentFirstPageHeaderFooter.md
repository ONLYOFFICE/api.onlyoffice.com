# GetDifferentFirstPageHeaderFooter

返回打印的首页是否使用不同的页眉和页脚。

## 语法

```javascript
expression.GetDifferentFirstPageHeaderFooter();
```

`expression` - 表示 [ApiPageSetup](../ApiPageSetup.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

在电子表格中检查打印的首页是否使用不同的页眉和页脚。

```javascript editor-xlsx
// How do I find out if the first page has its own header/footer in a spreadsheet?

// Read the different-first-page header/footer setting before printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetDifferentFirstPageHeaderFooter(true);
let isDifferent = pageSetup.GetDifferentFirstPageHeaderFooter();
worksheet.GetRange("A1").SetValue("Different first page header/footer: " + isDifferent);
```
