# GetPageOrientation

返回页面方向。

## 语法

```javascript
expression.GetPageOrientation();
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[PageOrientation](../../Enumeration/PageOrientation.md)

## 示例

此示例展示如何获取页面方向。

```javascript editor-xlsx
// How to get orientation of the sheet.

// Get a sheet orientation.

let worksheet = Api.GetActiveSheet();
let pageOrientation = worksheet.GetPageOrientation();
worksheet.GetRange("A1").SetValue("Page orientation: ");
worksheet.GetRange("C1").SetValue(pageOrientation);
```
