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

读取电子表格中工作表的下页边距。

```javascript editor-xlsx
// How do I find out the bottom margin size of a sheet in a spreadsheet?

// Check how much space is reserved at the bottom of the printed page in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let bottomMargin = worksheet.GetBottomMargin();
worksheet.GetRange("A1").SetValue("Bottom margin: " + bottomMargin + " mm");
```
