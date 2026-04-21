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

获取电子表格中的页面方向。

```javascript editor-xlsx
// How to get orientation of the sheet in a spreadsheet.

// Get a sheet orientation using the worksheet API in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageOrientation = worksheet.GetPageOrientation();
worksheet.GetRange("A1").SetValue("Page orientation: ");
worksheet.GetRange("C1").SetValue(pageOrientation);
```
