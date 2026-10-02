# GetFont

返回当前格式条件应用的字体。

继承自 [ApiFormatCondition.GetFont](../../ApiFormatCondition/Methods/GetFont.md)。

## 语法

```javascript
expression.GetFont();
```

`expression` - 表示 [ApiAboveAverage](../ApiAboveAverage.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiFont](../../ApiFont/ApiFont.md) \| null

## 示例

在电子表格中访问高于平均值条件格式规则的文本样式设置。

```javascript editor-xlsx
// How do I read and modify the font used when a cell value is above average in a spreadsheet?

// Retrieve the typography settings from an average-based rule to apply bold or colored text in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Performance Data");
worksheet.GetRange("A2").SetValue(65);
worksheet.GetRange("A3").SetValue(85);
worksheet.GetRange("A4").SetValue(95);
worksheet.GetRange("A5").SetValue(75);

let dataRange = worksheet.GetRange("A2:A5");
let formatConditions = dataRange.GetFormatConditions();
let aboveAverageCondition = formatConditions.AddAboveAverage();

let font = aboveAverageCondition.GetFont();
font.SetBold(true);
font.SetColor(Api.CreateColorFromRGB(0, 0, 255));

worksheet.GetRange("C1").SetValue("Font formatting applied");
worksheet.GetRange("C2").SetValue("Bold blue text for above average");
```
