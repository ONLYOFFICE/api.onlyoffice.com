# GetDataFields

Returns a collection that represents either a single pivot table data field\
or a collection of all visible data fields.

## Syntax

```javascript
expression.GetDataFields(field);
```

`expression` - A variable that represents a [ApiPivotTable](../ApiPivotTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| field | Required | number \| string \| undefined |  | The name or index of the field to be returned. |

## Returns

[ApiPivotDataField](../../ApiPivotDataField/ApiPivotDataField.md)[] \| [ApiPivotDataField](../../ApiPivotDataField/ApiPivotDataField.md) \| null

## Example

This example shows how to get data fields.

```javascript editor-xlsx
// How to get data fields from a pivot table.

// Create a pivot table, add data to it then get data fields from it.

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
    rows: 'Style',
});

pivotTable.AddDataField('Price');
pivotTable.AddDataField('Price');

let dataFields = pivotTable.GetDataFields();
for (let i = 0; i < dataFields.length; i += 1) {
    dataFields[i].SetName('Count of Price' + (i + 1));
    dataFields[i].SetFunction('Count');
}
```
