# GetFont

Returns the font applied by the current format condition.

Inherited from [ApiFormatCondition.GetFont](../../ApiFormatCondition/Methods/GetFont.md).

## Syntax

```javascript
expression.GetFont();
```

`expression` - A variable that represents an [ApiAboveAverage](../ApiAboveAverage.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiFont](../../ApiFont/ApiFont.md) \| null

## Example

Access the text styling settings of an above-average conditional formatting rule in a spreadsheet.

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
