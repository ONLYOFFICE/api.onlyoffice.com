# GetLayoutSubtotalLocation

Returns the layout subtotal location.

## Syntax

```javascript
expression.GetLayoutSubtotalLocation();
```

`expression` - A variable that represents a [ApiPivotField](../ApiPivotField.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[LayoutSubtotalLocationType](../../Enumeration/LayoutSubtotalLocationType.md)

## Example

This example shows how to get a layout subtotal location of a pivot field.

```javascript editor-xlsx
// How to get a layout subtotal location of a pivot field.

// Create a pivot table, add data to it then get a layout subtotal location of a specified pivot field.

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
    rows: ['Region', 'Style'],
});

pivotTable.AddDataField('Price');

let pivotWorksheet = Api.GetActiveSheet();
let pivotField = pivotTable.GetPivotFields('Region');

pivotWorksheet.GetRange('A14').SetValue('Region layout subtotal location');
pivotWorksheet.GetRange('B14').SetValue(pivotField.GetLayoutSubtotalLocation());
```
