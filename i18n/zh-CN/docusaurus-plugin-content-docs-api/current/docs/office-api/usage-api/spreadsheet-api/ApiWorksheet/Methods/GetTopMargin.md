# GetTopMargin

返回工作表的顶边距。

## 语法

```javascript
expression.GetTopMargin();
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

获取电子表格中工作表的上边距。

```javascript editor-xlsx
// How to get margin of the sheet's top side in a spreadsheet.

// Get the size of the top margin of the sheet in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let topMargin = worksheet.GetTopMargin();
worksheet.GetRange("A1").SetValue("Top margin: " + topMargin + " mm");
```
