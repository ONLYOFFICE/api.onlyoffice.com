# GetHyperlinks

返回范围中所有超链接的集合。

## 语法

```javascript
expression.GetHyperlinks();
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

ApiHyperlinks

## 示例

获取范围中的所有超链接。

```javascript editor-xlsx
// Useful for retrieving hyperlinks within a specific cell range.

// Get all hyperlinks from the range.

let worksheet = Api.GetActiveSheet();
worksheet.SetHyperlink("A1", "https://onlyoffice.com", null, "ONLYOFFICE", "Visit ONLYOFFICE");
worksheet.SetHyperlink("C1", "https://helpcenter.onlyoffice.com", null, "Help Center", "ONLYOFFICE Help");

let hyperlinks = worksheet.GetRange("A1").GetHyperlinks();

worksheet.GetRange("A3").SetValue("Hyperlinks in A1: " + hyperlinks.length);
worksheet.GetRange("A4").SetValue("Address: " + hyperlinks[0].GetAddress());
```
