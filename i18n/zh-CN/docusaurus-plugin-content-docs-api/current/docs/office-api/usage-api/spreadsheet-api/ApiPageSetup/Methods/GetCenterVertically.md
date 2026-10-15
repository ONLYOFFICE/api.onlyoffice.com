# GetCenterVertically

返回打印时工作表是否在页面上垂直居中。

## 语法

```javascript
expression.GetCenterVertically();
```

`expression` - 表示 [ApiPageSetup](../ApiPageSetup.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

在电子表格中检查打印内容是否在页面上垂直居中。

```javascript editor-xlsx
// How do I find out if the worksheet is vertically centered when printing in a spreadsheet?

// Read the vertical centering setting before printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetCenterVertically(true);
let isCentered = pageSetup.GetCenterVertically();
worksheet.GetRange("A1").SetValue("Centered vertically: " + isCentered);
```
