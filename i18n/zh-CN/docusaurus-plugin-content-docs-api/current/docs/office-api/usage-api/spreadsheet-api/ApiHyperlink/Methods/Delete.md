# Delete

删除超链接。

## 语法

```javascript
expression.Delete();
```

`expression` - 表示 [ApiHyperlink](../ApiHyperlink.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

此方法不返回任何数据。

## 示例

从单元格中删除超链接。

```javascript editor-xlsx
// Useful for removing a hyperlink while keeping the cell text.

// Delete a hyperlink.

let worksheet = Api.GetActiveSheet();
worksheet.SetHyperlink("A1", "https://onlyoffice.com", null, "ONLYOFFICE", "Visit ONLYOFFICE");

let hyperlink = worksheet.GetHyperlinks()[0];
hyperlink.Delete();

worksheet.GetRange("A3").SetValue("Hyperlinks count after delete: " + worksheet.GetHyperlinks().length);
```
