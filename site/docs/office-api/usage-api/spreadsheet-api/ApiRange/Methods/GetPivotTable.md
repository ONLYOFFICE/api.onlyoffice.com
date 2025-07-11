# GetPivotTable

Returns the ApiPivotTable object that represents the pivot table report containing the upper-left corner of the specified range.

## Syntax

```javascript
expression.GetPivotTable();
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiPivotTable](../../ApiPivotTable/ApiPivotTable.md) \| null

## Example

This example shows how to get a pivot table of the current range.

```javascript editor-xlsx
// How to get a pivot table of a cell.

// Get a range, get its pivot table and add some data fields to it.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange('B1').SetValue('Region');
worksheet.GetRange('C1').SetValue('Style');
worksheet.GetRange('D1').SetValue('Price');

worksheet.GetRange('B2').SetValue('East');
worksheet.GetRange('B3').SetValue('West');
worksheet.GetRange('B4').SetValue('East');
worksheet.GetRange('B5').SetValue('West');

worksheet.GetRange('C2').SetValue('Fancy');
worksheet.GetRange('C3').SetValue('Fancy');
worksheet.GetRange('C4').SetValue('Tee');
worksheet.GetRange('C5').SetValue('Tee');

worksheet.GetRange('D2').SetValue(42.5);
worksheet.GetRange('D3').SetValue(35.2);
worksheet.GetRange('D4').SetValue(12.3);
worksheet.GetRange('D5').SetValue(24.8);

let dataRef = Api.GetRange("'Sheet1'!$B$1:$D$5");
let pivotTable = Api.InsertPivotNewWorksheet(dataRef);

let samePivotTable = Api.GetActiveSheet().GetRange('B3').GetPivotTable();

samePivotTable.AddFields({
    rows: 'Region',
    columns: 'Style'
});

samePivotTable.AddDataField('Price');
```
