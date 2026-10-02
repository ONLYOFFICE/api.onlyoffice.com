# GetFillColor

返回格式条件的背景颜色。

当格式条件的背景颜色为 null 时返回“无填充”。

继承自 [ApiFormatCondition.GetFillColor](../../ApiFormatCondition/Methods/GetFillColor.md)。

## 语法

```javascript
expression.GetFillColor();
```

`expression` - 表示 [ApiAboveAverage](../ApiAboveAverage.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiColor](../../ApiColor/ApiColor.md) \| 'No Fill'

## 示例

在电子表格中读取用于突出显示高于平均值单元格的背景颜色。

```javascript editor-xlsx
// How do I find out what fill color an above-average conditional formatting rule uses in a spreadsheet?

// Inspect the highlight shade assigned to cells that exceed the average value in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");
let formatConditions = dataRange.GetFormatConditions();

let aboveAvgCondition = formatConditions.AddAboveAverage();
aboveAvgCondition.SetFillColor(Api.CreateColorFromRGB(255, 255, 0));

let fillColor = aboveAvgCondition.GetFillColor();

worksheet.GetRange("B1").SetValue("Fill Color Retrieved");
worksheet.GetRange("B2").SetValue(fillColor !== "No Fill" ? "Yellow color applied" : "No color");
```
