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

This example sets the array formula of a range.

```javascript editor-xlsx playground
// How to set the array formula value.

// Set the array formula.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1:C3").SetFormulaArray("={1,2,3}");
```
