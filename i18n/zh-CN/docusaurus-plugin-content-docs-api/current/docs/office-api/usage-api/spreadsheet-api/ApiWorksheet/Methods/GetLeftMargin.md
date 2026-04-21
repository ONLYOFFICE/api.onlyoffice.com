# GetLeftMargin

返回工作表的左边距。

## 语法

```javascript
expression.GetLeftMargin();
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

获取电子表格中工作表的左边距。

```javascript editor-xlsx
// How to get margin of the sheet's left side in a spreadsheet.

// Get the size of the left margin of the sheet in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let leftMargin = worksheet.GetLeftMargin();
worksheet.GetRange("A1").SetValue("Left margin: " + leftMargin + " mm");
```
