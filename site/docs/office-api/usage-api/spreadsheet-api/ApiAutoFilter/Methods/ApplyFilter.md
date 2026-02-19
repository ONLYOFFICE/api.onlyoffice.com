# ApplyFilter

Reapplies the AutoFilter to the worksheet using the existing filter criteria.\
\
This method corresponds to the Excel AutoFilter.ApplyFilter behavior:\
it does not change the currently defined filter conditions; it only\
reevaluates which rows should be visible based on the active filters.\
If no AutoFilter is defined for the worksheet, the method does nothing.

## Syntax

```javascript
expression.ApplyFilter();
```

`expression` - A variable that represents a [ApiAutoFilter](../ApiAutoFilter.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

void

## Example

This example reapplies an existing AutoFilter after the data changes.

```javascript editor-xlsx
// How to reuse filter criteria without redefining them.

// Reapply an AutoFilter using ApiAutoFilter.ApplyFilter().

let worksheet = Api.GetActiveSheet();

// Prepare sample data
worksheet.GetRange("A1").SetValue("Score");
worksheet.GetRange("A2").SetValue(10);
worksheet.GetRange("A3").SetValue(20);
worksheet.GetRange("A4").SetValue(30);
worksheet.GetRange("A5").SetValue(40);
worksheet.GetRange("A6").SetValue(50);

// Apply an AutoFilter that shows values greater than 25
let dataRange = worksheet.GetRange("A1:A6");
dataRange.SetAutoFilter(null);
dataRange.SetAutoFilter(1, ">25", "xlOr");

// Change one value so that the filter result would be different
worksheet.GetRange("A7").SetValue(22);

// Reapply the existing filter criteria on the worksheet
let autoFilter = worksheet.AutoFilter;
autoFilter.ApplyFilter();

// Explain in the sheet what we did
worksheet.GetRange("C1").SetValue("AutoFilter reapplied with ApplyFilter().");
worksheet.GetRange("C2").SetValue("Filter: Score > 25");
worksheet.GetRange("C7").SetValue("Updated value in A3 is now included by the filter.");

```
