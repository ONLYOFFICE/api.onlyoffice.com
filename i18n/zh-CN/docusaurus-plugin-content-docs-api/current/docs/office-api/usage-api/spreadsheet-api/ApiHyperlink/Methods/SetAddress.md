# SetAddress

设置目标文档的地址。

## 语法

```javascript
expression.SetAddress(sAddress);
```

`expression` - 表示 [ApiHyperlink](../ApiHyperlink.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sAddress | 必需 | string |  | 超链接地址。 |

## 返回值

此方法不返回任何数据。

## 示例

为超链接设置新地址。

```javascript editor-xlsx
// Useful for changing the URL of an existing hyperlink in a cell.

// Set a new address for a hyperlink.

let worksheet = Api.GetActiveSheet();
worksheet.SetHyperlink("A1", "https://onlyoffice.com", null, "ONLYOFFICE", "Visit ONLYOFFICE");

let hyperlink = worksheet.GetHyperlinks()[0];
hyperlink.SetAddress("https://helpcenter.onlyoffice.com");

worksheet.GetRange("A3").SetValue("New address: " + hyperlink.GetAddress());
```
