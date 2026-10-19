# GetScreenTip

返回超链接的屏幕提示文本。

## 语法

```javascript
expression.GetScreenTip();
```

`expression` - 表示 [ApiHyperlink](../ApiHyperlink.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

获取超链接的屏幕提示文本。

```javascript editor-xlsx
// Needed when reading the tooltip of a hyperlink in a cell.

// Get the screen tip text of a hyperlink.

let worksheet = Api.GetActiveSheet();
worksheet.SetHyperlink("A1", "https://onlyoffice.com", null, "ONLYOFFICE website", "Visit ONLYOFFICE");

let hyperlink = worksheet.GetHyperlinks()[0];

worksheet.GetRange("A3").SetValue("Screen tip: " + hyperlink.GetScreenTip());
```
