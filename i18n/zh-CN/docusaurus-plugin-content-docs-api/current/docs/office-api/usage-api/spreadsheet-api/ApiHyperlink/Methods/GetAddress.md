# GetAddress

返回目标文档的地址。

## 语法

```javascript
expression.GetAddress();
```

`expression` - 表示 [ApiHyperlink](../ApiHyperlink.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

获取超链接的地址。

```javascript editor-xlsx
// Needed when reading the URL of a hyperlink in a cell.

// Get the address of a hyperlink.

let worksheet = Api.GetActiveSheet();
worksheet.SetHyperlink("A1", "https://onlyoffice.com", null, "ONLYOFFICE", "Visit ONLYOFFICE");

let hyperlink = worksheet.GetHyperlinks()[0];

worksheet.GetRange("A3").SetValue("Address: " + hyperlink.GetAddress());
```
