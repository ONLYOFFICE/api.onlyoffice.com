# AddColorScale

Adds a new color scale conditional formatting rule to the collection.

## Syntax

```javascript
expression.AddColorScale(ColorScaleType);
```

`expression` - A variable that represents a [ApiFormatConditions](../ApiFormatConditions.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| ColorScaleType | Optional | number | 3 | The type of color scale (2 for two-color scale, 3 for three-color scale). |

## Returns

[ApiColorScale](../../ApiColorScale/ApiColorScale.md) \| null

## Example

Apply a gradient color range across cells to visualize high and low values at a glance in a spreadsheet.

```javascript editor-xlsx
// How do I shade a column of numbers from one color to another based on their relative size in a spreadsheet?

// Give a range a heat-map appearance by mapping cell values to a color spectrum in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Performance Data");
worksheet.GetRange("A2").SetValue(15);
worksheet.GetRange("A3").SetValue(67);
worksheet.GetRange("A4").SetValue(23);
worksheet.GetRange("A5").SetValue(89);
worksheet.GetRange("A6").SetValue(45);
worksheet.GetRange("A7").SetValue(91);
worksheet.GetRange("A8").SetValue(12);
worksheet.GetRange("A9").SetValue(78);

let dataRange = worksheet.GetRange("A2:A9");

let formatConditions = dataRange.GetFormatConditions();

formatConditions.AddColorScale(3);
```
