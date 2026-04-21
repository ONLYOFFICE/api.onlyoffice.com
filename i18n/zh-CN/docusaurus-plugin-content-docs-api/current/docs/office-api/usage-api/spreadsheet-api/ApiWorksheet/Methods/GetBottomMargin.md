# GetBottomMargin

返回工作表的底边距。

## 语法

```javascript
expression.GetBottomMargin();
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

获取电子表格中工作表的下边距。

```javascript editor-xlsx
// How to get margin of the bottom in a spreadsheet.

// Get the size of the bottom margin of the sheet in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let bottomMargin = worksheet.GetBottomMargin();
worksheet.GetRange("A1").SetValue("Bottom margin: " + bottomMargin + " mm");
```
