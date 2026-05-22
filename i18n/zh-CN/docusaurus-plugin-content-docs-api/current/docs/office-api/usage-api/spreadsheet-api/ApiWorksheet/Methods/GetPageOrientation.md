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

读取电子表格中活动工作表的打印页面方向。

```javascript editor-xlsx
// How do I check whether a sheet is set to portrait or landscape in a spreadsheet?

// Retrieve the orientation setting and display it in a cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageOrientation = worksheet.GetPageOrientation();
worksheet.GetRange("A1").SetValue("Page orientation: ");
worksheet.GetRange("C1").SetValue(pageOrientation);
```
