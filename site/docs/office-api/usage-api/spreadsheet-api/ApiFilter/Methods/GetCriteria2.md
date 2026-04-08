# GetCriteria2

Returns the second criteria associated with the filter for this column.

## Syntax

```javascript
expression.GetCriteria2();
```

`expression` - A variable that represents a [ApiFilter](../ApiFilter.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string \| null

## Example

This example reads the second criteria of a filter.

```javascript editor-xlsx
// How to inspect the additional condition of an AutoFilter column.

// Use ApiFilter.GetCriteria2() to get the second filter criterion.

let worksheet = Api.GetActiveSheet();

// Prepare numeric data
worksheet.GetRange("A1").SetValue("Value");
worksheet.GetRange("A2").SetValue(5);
worksheet.GetRange("A3").SetValue(10);
worksheet.GetRange("A4").SetValue(15);
worksheet.GetRange("A5").SetValue(20);
worksheet.GetRange("A6").SetValue(25);

// Create a custom filter with xlAnd
let dataRange = worksheet.GetRange("A1:A6");
dataRange.SetAutoFilter(1, ">=10", "xlAnd", "<=20");

// Get the filter and read both criteria
let autoFilter = worksheet.AutoFilter;
let filters = autoFilter.Filters;

if (filters.length > 0) {
    let filter = filters[0];

    worksheet.GetRange("C1").SetValue("Criteria2 (second condition):");
    worksheet.GetRange("D1").SetValue(filter.GetCriteria2());
}

```
