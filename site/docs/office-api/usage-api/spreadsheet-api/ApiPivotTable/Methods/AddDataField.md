# AddDataField

Adds a data field to the pivot table report.

## Syntax

```javascript
expression.AddDataField(field);
```

`expression` - A variable that represents a [ApiPivotTable](../ApiPivotTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| field | Required | number \| string |  | The index number or name of the data field. |

## Returns

[ApiPivotDataField](../../ApiPivotDataField/ApiPivotDataField.md)

## Example

Add a value field to a pivot table in a spreadsheet.

```javascript editor-xlsx
// How do I include a numeric column as a calculated value in a pivot table in a spreadsheet?

// Assign a custom label to the data field after inserting it into the pivot table in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange('B1').SetValue('Region');
worksheet.GetRange('C1').SetValue('Price');
worksheet.GetRange('B2').SetValue('East');
worksheet.GetRange('B3').SetValue('West');
worksheet.GetRange('C2').SetValue(42.5);
worksheet.GetRange('C3').SetValue(35.2);

let dataRef = Api.GetRange("'Sheet1'!$B$1:$C$3");
let pivotTable = Api.InsertPivotNewWorksheet(dataRef);

pivotTable.MoveField('Region', 'Rows');

let dataField = pivotTable.AddDataField('Price');
dataField.SetName('Regional prices');
```
