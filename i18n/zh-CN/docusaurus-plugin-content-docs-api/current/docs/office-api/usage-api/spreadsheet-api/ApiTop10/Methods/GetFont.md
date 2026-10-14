# GetFont

返回前 10 项条件格式规则的字体格式。

## 语法

```javascript
expression.GetFont();
```

`expression` - 表示 [ApiTop10](../ApiTop10.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiFont](../../ApiFont/ApiFont.md)

## 示例

在电子表格中读取前 10 项条件格式规则所应用的文本样式。

```javascript editor-xlsx
// How do I access the font settings of a top 10 conditional formatting rule in a spreadsheet?

// Inspect bold, color, and other text properties that mark top values in a spreadsheet.

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
condition1.SetFillColor(Api.RGB(255, 255, 0));

let font = condition1.GetFont();
font.SetBold(true);
font.SetColor(Api.RGB(255, 0, 0));

worksheet.GetRange("C1").SetValue("Font formatting applied");
worksheet.GetRange("C2").SetValue("Top 2 values have bold red text");
```
