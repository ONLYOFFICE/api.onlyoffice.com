# GetBottomMargin

返回下边距的大小。

## 语法

```javascript
expression.GetBottomMargin();
```

`expression` - 表示 [ApiPageSetup](../ApiPageSetup.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

读取电子表格中工作表的下页边距并将其显示在单元格中。

```javascript editor-xlsx
// How do I find out the current bottom margin of a worksheet in a spreadsheet?

// Check the spacing below the printed content before printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetBottomMargin(25.4);
let bottomMargin = pageSetup.GetBottomMargin();
worksheet.GetRange("A1").SetValue("Bottom margin: " + bottomMargin + " mm");
```
