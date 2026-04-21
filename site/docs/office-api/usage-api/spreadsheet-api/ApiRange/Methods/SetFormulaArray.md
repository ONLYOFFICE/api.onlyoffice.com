# SetFormulaArray

Sets an array formula to the current range.

## Syntax

```javascript
expression.SetFormulaArray(data);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| data | Required | string \| boolean \| number |  | The general value for the cell or cell range. |

## Returns

boolean

## Example

Set the array formula of a range.

```javascript editor-xlsx
// How to set the array formula value.

// Set formula array and display the result in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1:C3").SetFormulaArray("={1,2,3}");
```
