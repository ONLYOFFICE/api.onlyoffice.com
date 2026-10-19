# Group

Groups the dates of the pivot table field by periods or its numbers by intervals, as VBA Range.Group does for a cell of the field. The field must be in the rows or columns; grouping again replaces the previous grouping of the field. For dates, the field shows the shortest period, and a new field is added next to it for every longer one.

## Syntax

```javascript
expression.Group(start, end, by, periods);
```

`expression` - A variable that represents an [ApiPivotField](../ApiPivotField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| start | Optional | boolean \| number \| Date | true | The first value to group, or true for the first value of the field. A date is a Date object or its serial number. |
| end | Optional | boolean \| number \| Date | true | The last value to group, or true for the last value of the field. |
| by | Optional | number |  | The size of each group of numbers, or the number of days in each group when the dates are grouped by days alone. If omitted, the size of the number groups is chosen automatically and each day is a group. |
| periods | Optional | boolean[] |  | Seven values which specify whether the dates are grouped by seconds, minutes, hours, days, months, quarters and years. If omitted, the dates are grouped by months. The numbers ignore it. |

## Returns

boolean

## Example

Group the dates of a pivot table field by months and years in a spreadsheet.

```javascript editor-xlsx
// How do I show pivot table totals by month and year instead of by day in a spreadsheet?

// Summarize daily sales by month within each year using date grouping in a pivot table.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange('B1:C1').SetValue([['Date', 'Amount']]);
worksheet.GetRange('B2:C7').SetValue([
    ['2024-01-15', 120],
    ['2024-01-28', 80],
    ['2024-02-10', 150],
    ['2024-12-05', 60],
    ['2025-01-20', 90],
    ['2025-02-14', 110]
]);

let dataRef = Api.GetRange("'Sheet1'!$B$1:$C$7");
let pivotTable = Api.InsertPivotNewWorksheet(dataRef);

pivotTable.AddFields({
    rows: 'Date',
});

pivotTable.AddDataField('Amount');

// The periods are seconds, minutes, hours, days, months, quarters and years, as in VBA.
let pivotField = pivotTable.GetPivotFields('Date');
let grouped = pivotField.Group(true, true, undefined, [false, false, false, false, true, false, true]);

let pivotWorksheet = Api.GetActiveSheet();
pivotWorksheet.GetRange('D1').SetValue('Grouped by months and years');
pivotWorksheet.GetRange('E1').SetValue(grouped);
```
