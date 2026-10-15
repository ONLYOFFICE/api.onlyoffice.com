# GetEvenPage

返回工作表偶数页的页眉和页脚。仅当启用 [ApiPageSetup#GetOddAndEvenPagesHeaderFooter](../../ApiPageSetup/Methods/GetOddAndEvenPagesHeaderFooter.md) 时，返回的对象才有意义。

## 语法

```javascript
expression.GetEvenPage();
```

`expression` - 表示 [ApiPageSetup](../ApiPageSetup.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiPage](../../ApiPage/ApiPage.md)

## 示例

在电子表格中获取偶数页页眉/页脚对象以自定义打印。

```javascript editor-xlsx
// How do I set a separate header or footer for even pages in a spreadsheet?

// Access the even pages' header and footer to give them their own content in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetOddAndEvenPagesHeaderFooter(true);
let evenPage = pageSetup.GetEvenPage();
evenPage.GetCenterHeader().SetText("Even page &P");
```
