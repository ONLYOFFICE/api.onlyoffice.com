# GetSubtotals

Returns an object that represents all subtotals.

## Syntax

```javascript
expression.GetSubtotals();
```

`expression` - A variable that represents a [ApiPivotField](../ApiPivotField.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[PivotFieldSubtotals](../../Enumeration/PivotFieldSubtotals.md)

## Example

This example shows how to get subtotals of a pivot field.

```javascript editor-xlsx
// How to get a pivot field's subtotals.

// Create a pivot table, add data to it then get subtotals of a specified pivot field as an array.

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
    columns: ['Style'],
    rows: 'Region',
});

pivotTable.AddDataField('Price');

let pivotWorksheet = Api.GetActiveSheet();
let pivotField = pivotTable.GetPivotFields('Region');

let subtotals = pivotField.GetSubtotals();
pivotWorksheet.GetRange('A11').SetValue('Region subtotals');
let k = 12;
for (let i in subtotals) {
    pivotWorksheet.GetRangeByNumber(k, 0).SetValue(i);
    pivotWorksheet.GetRangeByNumber(k++, 1).SetValue(subtotals[i]);
}
```
