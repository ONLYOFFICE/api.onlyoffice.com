# GetHyperlinks

返回工作表上所有超链接的集合。

## 语法

```javascript
expression.GetHyperlinks();
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

ApiHyperlinks

## 示例

获取工作表中的所有超链接。

```javascript editor-xlsx
// Useful for retrieving all hyperlinks on a worksheet as an array.

// Get all hyperlinks from the worksheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetHyperlink("A1", "https://onlyoffice.com", null, "ONLYOFFICE", "Visit ONLYOFFICE");
worksheet.SetHyperlink("A2", "https://helpcenter.onlyoffice.com", null, "Help Center", "ONLYOFFICE Help");

let hyperlinks = worksheet.GetHyperlinks();

worksheet.GetRange("A4").SetValue("Hyperlinks count: " + hyperlinks.length);
worksheet.GetRange("A5").SetValue("First hyperlink address: " + hyperlinks[0].GetAddress());
worksheet.GetRange("A6").SetValue("Second hyperlink address: " + hyperlinks[1].GetAddress());
```
