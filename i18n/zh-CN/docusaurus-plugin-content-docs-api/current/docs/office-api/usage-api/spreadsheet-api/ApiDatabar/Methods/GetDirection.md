# GetDirection

返回数据条的方向。

## 语法

```javascript
expression.GetDirection();
```

`expression` - 表示 [ApiDatabar](../ApiDatabar.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[XlReadingOrder](../../Enumeration/XlReadingOrder.md)

## 示例

读取电子表格中数据条的增长方向。

```javascript editor-xlsx
// How do I find out which direction data bars grow toward in a spreadsheet?

// Confirm whether data bars expand left-to-right or right-to-left in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");
let formatConditions = dataRange.GetFormatConditions();

let dataBar = formatConditions.AddDatabar();

let direction = dataBar.GetDirection();

worksheet.GetRange("C1").SetValue("Direction:");
worksheet.GetRange("C2").SetValue(direction);
```
