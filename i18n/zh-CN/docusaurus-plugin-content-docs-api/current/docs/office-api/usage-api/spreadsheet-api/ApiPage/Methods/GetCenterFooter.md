# GetCenterFooter

返回此页面类型的页脚中间部分。

## 语法

```javascript
expression.GetCenterFooter();
```

`expression` - 表示 [ApiPage](../ApiPage.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiHeaderFooter](../../ApiHeaderFooter/ApiHeaderFooter.md)

## 示例

在电子表格中获取特定页面类型（偶数页或首页）的页脚中间部分。

```javascript editor-xlsx
// How do I set the center footer for even pages in a spreadsheet?

// Access the even pages' center footer to give it its own text when printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetOddAndEvenPagesHeaderFooter(true);
let section = pageSetup.GetEvenPage().GetCenterFooter();
section.SetText("Page &P of &N");
```
