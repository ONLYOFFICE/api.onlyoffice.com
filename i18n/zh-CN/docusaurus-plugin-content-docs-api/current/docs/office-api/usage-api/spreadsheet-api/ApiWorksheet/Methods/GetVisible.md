# GetVisible

返回工作表的可见性状态。

## 语法

```javascript
expression.GetVisible();
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

此示例展示如何获取工作表的可见性状态。

```javascript editor-xlsx
// How to get visibility of the worksheet.

// Find out whether a sheet is visible or not and display it in the sheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetVisible(true);
let isVisible = worksheet.GetVisible();
worksheet.GetRange("A1").SetValue("Visible: ");
worksheet.GetRange("B1").SetValue(isVisible);
```
