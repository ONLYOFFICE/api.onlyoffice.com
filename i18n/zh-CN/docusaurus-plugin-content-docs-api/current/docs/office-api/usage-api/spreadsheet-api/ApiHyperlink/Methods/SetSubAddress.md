# SetSubAddress

设置目标文档的子地址。

## 语法

```javascript
expression.SetSubAddress(sSubAddress);
```

`expression` - 表示 [ApiHyperlink](../ApiHyperlink.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sSubAddress | 必需 | string |  | "Sheet1!A1" 格式的子地址。 |

## 返回值

此方法不返回任何数据。

## 示例

为超链接设置新的子地址。

```javascript editor-xlsx
// Useful for changing the internal location of an existing hyperlink in a cell.

// Set a new subaddress for a hyperlink.

let worksheet = Api.GetActiveSheet();
worksheet.SetHyperlink("A1", "", "Sheet1!B5", "Go to B5", "Internal link");

let hyperlink = worksheet.GetHyperlinks()[0];
hyperlink.SetSubAddress("Sheet1!D10");

worksheet.GetRange("A3").SetValue("New subaddress: " + hyperlink.GetSubAddress());
```
