# GetAxisPosition

返回数据条条件格式规则的轴位置。

## 语法

```javascript
expression.GetAxisPosition();
```

`expression` - 表示 [ApiDatabar](../ApiDatabar.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[XlDataBarAxisPosition](../../Enumeration/XlDataBarAxisPosition.md)

## 示例

读取电子表格中条形格式规则内中点轴的放置位置。

```javascript editor-xlsx
// How do I find out the axis position setting of a data bar rule in a spreadsheet?

// Inspect the axis placement to understand how bars are oriented in a spreadsheet.

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

let axisPosition = dataBar.GetAxisPosition();

worksheet.GetRange("C1").SetValue("Axis Position:");
worksheet.GetRange("C2").SetValue(axisPosition);
```
