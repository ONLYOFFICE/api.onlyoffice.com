# SetCaption

Sets a value that represents the label text for the data field.

## Syntax

```javascript
expression.SetCaption(caption);
```

`expression` - A variable that represents a [ApiPivotDataField](../ApiPivotDataField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| caption | Required | string |  | The label text for the data field. |

## Returns

This method doesn't return any data.

## Example

This example shows how to set a caption for data field.

```javascript editor-xlsx
// How to rename a caption of a table element.

// Create a pivot table, add data to it then set a custom data field's caption.

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
let dataField = pivotTable.GetDataFields('Sum of Price');

pivotWorksheet.GetRange('A12').SetValue('Data field caption');
pivotWorksheet.GetRange('B12').SetValue(dataField.GetCaption());

dataField.SetCaption('My Sum of Price');
pivotWorksheet.GetRange('A13').SetValue('New Data field caption');
pivotWorksheet.GetRange('B13').SetValue(dataField.GetCaption());
```
