# ShowDetails

Shows details of the pivot table cell.

## Syntax

```javascript
expression.ShowDetails(rowLine, colLine);
```

`expression` - A variable that represents a [ApiPivotTable](../ApiPivotTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rowLine | Required | number |  | The position of the pivot line (a line of rows in the pivot table) on the row area. |
| colLine | Required | number |  | The position of the pivot line (a line of columns in the pivot table) on the column area. |

## Returns

boolean

## Example

This example shows how to show details of a pivot table.

```javascript editor-xlsx
// How to display details of a field using its position.

// Create a pivot table, add data to it then get and show its fiels details.

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
    rows: 'Region',
    columns: 'Style',
});

pivotTable.AddDataField('Price');

pivotTable.ShowDetails(1, 3);

let showDetailsSheet = Api.GetActiveSheet();
showDetailsSheet.GetRange('A5').SetValue('East details');
```
