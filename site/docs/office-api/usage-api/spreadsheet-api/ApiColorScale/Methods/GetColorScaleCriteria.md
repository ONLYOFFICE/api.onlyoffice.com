# GetColorScaleCriteria

Returns the collection of criteria that define this color scale rule.

## Syntax

```javascript
expression.GetColorScaleCriteria();
```

`expression` - A variable that represents a [ApiColorScale](../ApiColorScale.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiColorScaleCriterion](../../ApiColorScaleCriterion/ApiColorScaleCriterion.md)[] \| null

## Example

This example demonstrates getting the color scale criteria collection.

```javascript editor-xlsx playground
// How to access and display color scale criteria information.

// Get the collection of color scale criteria from a color scale conditional formatting rule.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Test Data");
worksheet.GetRange("A2").SetValue(10);
worksheet.GetRange("A3").SetValue(30);
worksheet.GetRange("A4").SetValue(50);
worksheet.GetRange("A5").SetValue(70);
worksheet.GetRange("A6").SetValue(90);

let dataRange = worksheet.GetRange("A2:A6");
let formatConditions = dataRange.GetFormatConditions();

let colorScale = formatConditions.AddColorScale(2);

let criteria = colorScale.GetColorScaleCriteria();

worksheet.GetRange("C1").SetValue("Criteria Count:");
worksheet.GetRange("C2").SetValue(criteria ? criteria.length : 0);

```
