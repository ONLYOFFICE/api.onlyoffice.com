# GetFilters

Returns the array of ApiFilter objects that represents the filters applied to the AutoFilter range.

## Syntax

```javascript
expression.GetFilters();
```

`expression` - A variable that represents a [ApiAutoFilter](../ApiAutoFilter.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiFilter](../../ApiFilter/ApiFilter.md)[]

## Example

This example reads filter information from the worksheet AutoFilter.

```javascript editor-xlsx
// How to inspect the criteria of existing filters.

// Read ApiFilter objects using ApiAutoFilter.GetFilters().

let worksheet = Api.GetActiveSheet();

// Prepare sample data
worksheet.GetRange("A1").SetValue("Value");
worksheet.GetRange("A2").SetValue(2);
worksheet.GetRange("A3").SetValue(5);
worksheet.GetRange("A4").SetValue(7);
worksheet.GetRange("A5").SetValue(9);
worksheet.GetRange("A6").SetValue(11);

// Apply a values filter on column A
let dataRange = worksheet.GetRange("A1:A6");
dataRange.SetAutoFilter(1, ["2", "5", "7"], "xlFilterValues");

// Get the AutoFilter and its filters collection
let autoFilter = worksheet.AutoFilter;
let filters = autoFilter.GetFilters();      // or autoFilter.Filters

worksheet.GetRange("C1").SetValue("Number of filters:");
worksheet.GetRange("C2").SetValue(filters.length);

// Show information about the first filter
if (filters.length > 0) {
    let f = filters[0];

    worksheet.GetRange("C4").SetValue("Operator:");
    worksheet.GetRange("C5").SetValue(f.Operator);

    worksheet.GetRange("C7").SetValue("Criteria1:");
    worksheet.GetRange("C8").SetValue(f.Criteria1.toString());

    worksheet.GetRange("C10").SetValue("Filter On:");
    worksheet.GetRange("C11").SetValue(f.On);
}

```
