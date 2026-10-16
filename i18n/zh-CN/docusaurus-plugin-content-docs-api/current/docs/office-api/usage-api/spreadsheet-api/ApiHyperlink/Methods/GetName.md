# GetName

返回超链接的名称。

## 语法

```javascript
expression.GetName();
```

`expression` - 表示 [ApiHyperlink](../ApiHyperlink.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

获取超链接的名称。

```javascript editor-xlsx
// Needed when reading the name of a hyperlink in a cell.

// Get the name of a hyperlink.

let worksheet = Api.GetActiveSheet();
worksheet.SetHyperlink("A1", "https://onlyoffice.com", null, "ONLYOFFICE", "Visit ONLYOFFICE");

let hyperlink = worksheet.GetHyperlinks()[0];

worksheet.GetRange("A3").SetValue("Hyperlink name: " + hyperlink.GetName());
```
