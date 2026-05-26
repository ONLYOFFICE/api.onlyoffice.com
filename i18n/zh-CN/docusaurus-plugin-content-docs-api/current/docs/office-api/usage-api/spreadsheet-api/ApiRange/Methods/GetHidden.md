# GetHidden

返回值隐藏属性。指定的范围必须跨越整列或整行。

## 语法

```javascript
expression.GetHidden();
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

检查电子表格中选定范围内的行是否隐藏。

```javascript editor-xlsx
// How do I find out if a range of rows is currently hidden in a spreadsheet?

// Reveal the visibility state of a row group without scrolling through the sheet in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRows("1:3");
range.SetHidden(true);
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
worksheet.GetRange("C1").SetValue("3");
let hidden = range.GetHidden();
worksheet.GetRange("A4").SetValue("The values from A1:C1 are hidden: " + hidden);
```
