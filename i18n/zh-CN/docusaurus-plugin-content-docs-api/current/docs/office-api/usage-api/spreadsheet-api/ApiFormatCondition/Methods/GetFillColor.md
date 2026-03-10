# GetFillColor

返回格式条件的背景颜色。当格式条件的背景颜色为 null 时返回「无填充」。

## 语法

```javascript
expression.GetFillColor();
```

`expression` - 表示 [ApiFormatCondition](../ApiFormatCondition.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiColor](../../ApiColor/ApiColor.md) \| 'No Fill'

## 示例

此示例从条件格式规则获取背景颜色。

```javascript editor-xlsx
// How to retrieve background colors from conditional formatting rules.

// Get conditional formatting rule background color.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");

let formatConditions = dataRange.GetFormatConditions();

let condition1 = formatConditions.Add("xlCellValue", "xlGreater", "200");
let fillColor = Api.CreateColorFromRGB(255, 255, 0);
condition1.SetFillColor(fillColor);

let currentColor = condition1.GetFillColor();

worksheet.GetRange("C1").SetValue("Background color:");
worksheet.GetRange("C2").SetValue(currentColor === "No Fill" ? "No Fill" : "Color applied");

```
