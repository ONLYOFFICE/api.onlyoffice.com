# GetCriteria1

Returns the first criteria associated with the filter for this column.

## Syntax

```javascript
expression.GetCriteria1();
```

`expression` - A variable that represents a [ApiFilter](../ApiFilter.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string \| string[] \| number \| [XlDynamicFilterCriteria](../../Enumeration/XlDynamicFilterCriteria.md) \| null

## Example

This example reads the first criteria of a filter.

```javascript editor-xlsx
// How to inspect the main condition of an AutoFilter column.

// Use ApiFilter.GetCriteria1() to get the first filter criterion.

let worksheet = Api.GetActiveSheet();

// Prepare numeric data
worksheet.GetRange("A1").SetValue("Value");
worksheet.GetRange("A2").SetValue(10);
worksheet.GetRange("A3").SetValue(20);
worksheet.GetRange("A4").SetValue(30);
worksheet.GetRange("A5").SetValue(40);
worksheet.GetRange("A6").SetValue(50);

// Create a custom filter with two criteria (xlOr)
let dataRange = worksheet.GetRange("A1:A6");
dataRange.SetAutoFilter(1, ">20", "xlOr", "<=30");

// Get the first filter object
let autoFilter = worksheet.AutoFilter;
let filters = autoFilter.Filters;

if (filters.length > 0) {
    let filter = filters[0];
    let criteria1 = filter.GetCriteria1();  // or filter.Criteria1

    worksheet.GetRange("C1").SetValue("Criteria1 (first condition):");
    worksheet.GetRange("D1").SetValue(criteria1);
}

```
