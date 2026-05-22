# GetMinPointType

返回数据条最小值条件的类型。

## 语法

```javascript
expression.GetMinPointType();
```

`expression` - 表示 [ApiDatabar](../ApiDatabar.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[XlConditionValueTypes](../../Enumeration/XlConditionValueTypes.md) \| null

## 示例

读取电子表格中数据条下边界的定义方式。

```javascript editor-xlsx
// How do I find out what method sets the minimum end of a data bar in a spreadsheet?

// Identify whether the bottom limit of a data bar uses a fixed value, percentage, or automatic setting in a spreadsheet.

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

let minPointType = dataBar.GetMinPointType();

worksheet.GetRange("C1").SetValue("Min Point Type:");
worksheet.GetRange("C2").SetValue(minPointType);
```
