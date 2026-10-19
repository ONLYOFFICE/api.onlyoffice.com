# GetRange

返回超链接所附加到的范围。

## 语法

```javascript
expression.GetRange();
```

`expression` - 表示 [ApiHyperlink](../ApiHyperlink.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiRange](../../ApiRange/ApiRange.md)

## 示例

获取超链接所附加到的范围。

```javascript editor-xlsx
// Useful for getting the cell range of a hyperlink.

// Get the range of a hyperlink.

let worksheet = Api.GetActiveSheet();
worksheet.SetHyperlink("B2", "https://onlyoffice.com", null, "ONLYOFFICE", "Visit ONLYOFFICE");

let hyperlink = worksheet.GetHyperlinks()[0];
let range = hyperlink.GetRange();

worksheet.GetRange("A4").SetValue("Hyperlink range address: " + range.GetAddress());
```
