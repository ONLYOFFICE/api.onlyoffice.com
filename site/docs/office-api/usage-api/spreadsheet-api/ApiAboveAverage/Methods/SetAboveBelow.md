# SetAboveBelow

Sets whether the rule targets values above or below the average.

## Syntax

```javascript
expression.SetAboveBelow(aboveBelow);
```

`expression` - A variable that represents a [ApiAboveAverage](../ApiAboveAverage.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| aboveBelow | Required | boolean |  | True if the rule targets above-average values; false if it targets below-average values. |

## Returns

This method doesn't return any data.

## Example

Choose whether a highlight rule marks cells above or below the average value in a spreadsheet.

```javascript editor-xlsx
// How do I switch a highlight rule between targeting high and low values in a spreadsheet?

// Flip a conditional rule to focus on below-average cells instead of above-average ones in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Test Data");
worksheet.GetRange("A2").SetValue(10);
worksheet.GetRange("A3").SetValue(20);
worksheet.GetRange("A4").SetValue(30);
worksheet.GetRange("A5").SetValue(40);
worksheet.GetRange("A6").SetValue(50);

let dataRange = worksheet.GetRange("A2:A6");
let formatConditions = dataRange.GetFormatConditions();

let condition = formatConditions.AddAboveAverage();
condition.SetFillColor(Api.CreateColorFromRGB(255, 255, 0));

worksheet.GetRange("C1").SetValue("Before:");
worksheet.GetRange("C2").SetValue(condition.GetAboveBelow() ? "Above" : "Below");

condition.SetAboveBelow(false);

worksheet.GetRange("C3").SetValue("After:");
worksheet.GetRange("C4").SetValue(condition.GetAboveBelow() ? "Above" : "Below");
```
