# GetHiddenFields

Returns an array that represents all the hidden fields in the pivot table.

## Syntax

```javascript
expression.GetHiddenFields();
```

`expression` - A variable that represents a [ApiPivotTable](../ApiPivotTable.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiPivotField](../../ApiPivotField/ApiPivotField.md)[]

## Example

This example shows how to get a hidden fields of a pivot table.

```javascript editor-xlsx
// How to get a hidden filds of a table.

// Create a pivot table, add data to it then get its invisible fields.

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

pivotTable.AddFields({
    columns: 'Region',
});

pivotTable.AddDataField('Price');

let pivotWorksheet = Api.GetActiveSheet();
pivotWorksheet.GetRange('A9').SetValue('Hidden Fields');

let hiddenFields = pivotTable.GetHiddenFields();
for (let i = 0; i < hiddenFields.length; i += 1) {
    let cell = pivotWorksheet.GetRangeByNumber(8 + i, 1);
    cell.SetValue(hiddenFields[i].GetName());
}
```
