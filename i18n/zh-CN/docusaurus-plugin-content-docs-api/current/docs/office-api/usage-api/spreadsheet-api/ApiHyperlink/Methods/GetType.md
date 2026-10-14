# GetType

返回超链接的类型。

## 语法

```javascript
expression.GetType();
```

`expression` - 表示 [ApiHyperlink](../ApiHyperlink.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

获取超链接的类型。

```javascript editor-xlsx
// Useful for checking the type of a hyperlink attached to a cell range.

// Get the type of a hyperlink.

let worksheet = Api.GetActiveSheet();
worksheet.SetHyperlink("A1", "https://onlyoffice.com", null, "ONLYOFFICE", "Visit ONLYOFFICE");

let hyperlink = worksheet.GetHyperlinks()[0];

worksheet.GetRange("A3").SetValue("Hyperlink type: " + hyperlink.GetType());
```
