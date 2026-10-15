# SetTextToDisplay

设置超链接的显示文本。

## 语法

```javascript
expression.SetTextToDisplay(sText);
```

`expression` - 表示 [ApiHyperlink](../ApiHyperlink.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | 必需 | string |  | 要显示的文本。 |

## 返回值

此方法不返回任何数据。

## 示例

为超链接设置新的显示文本。

```javascript editor-xlsx
// Useful for changing the text shown in a cell for a hyperlink.

// Set a new display text for a hyperlink.

let worksheet = Api.GetActiveSheet();
worksheet.SetHyperlink("A1", "https://onlyoffice.com", null, "ONLYOFFICE", "Visit ONLYOFFICE");

let hyperlink = worksheet.GetHyperlinks()[0];
hyperlink.SetTextToDisplay("Go to ONLYOFFICE");

worksheet.GetRange("A3").SetValue("New display text: " + hyperlink.GetTextToDisplay());
```
