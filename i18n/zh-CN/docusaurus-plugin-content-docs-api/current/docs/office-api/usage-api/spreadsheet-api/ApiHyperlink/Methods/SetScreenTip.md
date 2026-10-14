# SetScreenTip

设置超链接的屏幕提示文本。

## 语法

```javascript
expression.SetScreenTip(sScreenTip);
```

`expression` - 表示 [ApiHyperlink](../ApiHyperlink.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sScreenTip | 必需 | string |  | 屏幕提示文本。 |

## 返回值

此方法不返回任何数据。

## 示例

为超链接设置新的屏幕提示文本。

```javascript editor-xlsx
// Useful for changing the tooltip of an existing hyperlink in a cell.

// Set a new screen tip for a hyperlink.

let worksheet = Api.GetActiveSheet();
worksheet.SetHyperlink("A1", "https://onlyoffice.com", null, "ONLYOFFICE website", "Visit ONLYOFFICE");

let hyperlink = worksheet.GetHyperlinks()[0];
hyperlink.SetScreenTip("Go to ONLYOFFICE Help Center");

worksheet.GetRange("A3").SetValue("New screen tip: " + hyperlink.GetScreenTip());
```
