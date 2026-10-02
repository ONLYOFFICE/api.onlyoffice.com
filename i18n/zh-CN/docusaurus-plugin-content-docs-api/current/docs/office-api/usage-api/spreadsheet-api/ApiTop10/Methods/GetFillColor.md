# GetFillColor

返回格式条件的背景颜色。

当格式条件的背景颜色为 null 时返回“无填充”。

继承自 [ApiFormatCondition.GetFillColor](../../ApiFormatCondition/Methods/GetFillColor.md)。

## 语法

```javascript
expression.GetFillColor();
```

`expression` - 表示 [ApiTop10](../ApiTop10.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiColor](../../ApiColor/ApiColor.md) \| 'No Fill'

## 示例

在电子表格中读取前 10 项条件格式规则设置的背景颜色。

```javascript editor-xlsx
// How do I find out what fill color a top 10 conditional formatting rule uses in a spreadsheet?

// Confirm which highlight color marks the top values in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");
let formatConditions = dataRange.GetFormatConditions();

let condition1 = formatConditions.AddTop10();
condition1.SetFillColor(Api.CreateColorFromRGB(255, 255, 0));

let fillColor = condition1.GetFillColor();

worksheet.GetRange("C1").SetValue("Fill color retrieved");
worksheet.GetRange("C2").SetValue("Top 2 values highlighted");
```
