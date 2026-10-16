# GetFirstPage

返回工作表首页的页眉和页脚。仅当启用 [ApiPageSetup#GetDifferentFirstPageHeaderFooter](../../ApiPageSetup/Methods/GetDifferentFirstPageHeaderFooter.md) 时，返回的对象才有意义。

## 语法

```javascript
expression.GetFirstPage();
```

`expression` - 表示 [ApiPageSetup](../ApiPageSetup.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiPage](../../ApiPage/ApiPage.md)

## 示例

在电子表格中获取首页页眉/页脚对象以自定义打印。

```javascript editor-xlsx
// How do I set a separate header or footer for the first page in a spreadsheet?

// Access the first page's header and footer to give them their own content in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetDifferentFirstPageHeaderFooter(true);
let firstPage = pageSetup.GetFirstPage();
firstPage.GetCenterHeader().SetText("Report title");
```
