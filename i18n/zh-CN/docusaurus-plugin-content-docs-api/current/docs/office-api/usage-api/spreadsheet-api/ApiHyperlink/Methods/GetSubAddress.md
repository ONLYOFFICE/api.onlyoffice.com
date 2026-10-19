# GetSubAddress

返回目标文档的子地址。

## 语法

```javascript
expression.GetSubAddress();
```

`expression` - 表示 [ApiHyperlink](../ApiHyperlink.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

获取超链接的子地址。

```javascript editor-xlsx
// Needed when reading the internal location of a hyperlink in a cell.

// Get the subaddress of a hyperlink.

let worksheet = Api.GetActiveSheet();
worksheet.SetHyperlink("A1", "", "Sheet1!B5", "Go to B5", "Internal link");

let hyperlink = worksheet.GetHyperlinks()[0];

worksheet.GetRange("A3").SetValue("SubAddress: " + hyperlink.GetSubAddress());
```
