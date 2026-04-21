# GetAllPivotTables

Returns all pivot tables.

## Syntax

```javascript
expression.GetAllPivotTables();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiPivotTable](../../ApiPivotTable/ApiPivotTable.md)[]

## Example

Get pivot tables from the worksheet in a spreadsheet.

```javascript editor-xlsx
// How to get pivot tables in a spreadsheet.

// How to work with pivot tables in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B1').SetValue('Region');
worksheet.GetRange('C1').SetValue('Price');
worksheet.GetRange('B2').SetValue('East');
worksheet.GetRange('B3').SetValue('West');
worksheet.GetRange('C2').SetValue(42.5);
worksheet.GetRange('C3').SetValue(35.2);

let dataRef = Api.GetRange("'Sheet1'!$B$1:$C$3");
Api.InsertPivotNewWorksheet(dataRef);
Api.InsertPivotNewWorksheet(dataRef);
Api.InsertPivotNewWorksheet(dataRef);

Api.GetAllPivotTables().forEach(function (pivot) {
    pivot.AddDataField('Price');
});
```
