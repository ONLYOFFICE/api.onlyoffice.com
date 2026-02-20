# SetRepeatLabels

Sets the setting which specifies whether to repeat items labels at each row.

## Syntax

```javascript
expression.SetRepeatLabels(repeat);
```

`expression` - A variable that represents a [ApiPivotDataField](../ApiPivotDataField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| repeat | Required | boolean |  | Specifies whether to repeat items labels at each row. |

## Returns

This method doesn't return any data.

## Example

This example shows how to set a repeate labels of a pivot field.

```javascript editor-xlsx playground
// How to change a pivot field repeated labels.

// Create a pivot table, add data to it then add repeat labels of a specified pivot.

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
pivotTable.SetRowAxisLayout('Tabular');

let pivotWorksheet = Api.GetActiveSheet();
let pivotField = pivotTable.GetPivotFields('Region');
pivotField.SetRepeatLabels(true);

pivotWorksheet.GetRange('A12').SetValue('Region repeat labels');
pivotWorksheet.GetRange('B12').SetValue(pivotField.GetRepeatLabels());
```
