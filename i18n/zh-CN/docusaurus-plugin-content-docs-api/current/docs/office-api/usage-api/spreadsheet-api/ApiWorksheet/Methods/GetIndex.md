# GetIndex

返回工作表索引。

## 语法

```javascript
expression.GetIndex();
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

查找电子表格中工作表在所有工作表中的位置。

```javascript editor-xlsx
// How do I get the tab number of the active sheet in a spreadsheet?

// Identify the sheet order index and display it in a cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let leftMargin = worksheet.GetLeftMargin();
worksheet.GetRange("A1").SetValue("Left margin: " + leftMargin + " mm");
```
