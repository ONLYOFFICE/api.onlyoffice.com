# GetOn

Indicates whether any filter is applied on this column.\
\
The property is true when at least one of the following underlying\
structures is present for the column:\
- Filters\
- CustomFiltersObj\
- DynamicFilter\
- ColorFilter\
- Top10

## Syntax

```javascript
expression.GetOn();
```

`expression` - A variable that represents a [ApiFilter](../ApiFilter.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example checks whether a filter is active on a column.

```javascript editor-xlsx
// How to see if a given column currently has any filter definition.

// Use ApiFilter.GetOn() to test if a filter is applied.

let worksheet = Api.GetActiveSheet();

// Prepare data
worksheet.GetRange("A1").SetValue("Score");
worksheet.GetRange("A2").SetValue(1);
worksheet.GetRange("A3").SetValue(2);
worksheet.GetRange("A4").SetValue(3);
worksheet.GetRange("A5").SetValue(4);
worksheet.GetRange("A6").SetValue(5);

// Apply a filter on column A
let dataRange = worksheet.GetRange("A1:A6");
dataRange.SetAutoFilter(1, ">2", "xlOr");

// Inspect the filter
let autoFilter = worksheet.AutoFilter;
let filters = autoFilter.Filters;

if (filters.length > 0) {
    let filter = filters[0];

    worksheet.GetRange("C1").SetValue("Filter applied on column A:");
    worksheet.GetRange("D1").SetValue(filter.GetOn());    // or filter.On
}

```
