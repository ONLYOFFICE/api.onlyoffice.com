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

Apply an array formula to a range of cells in a spreadsheet.

```javascript editor-xlsx
// How do I fill multiple cells with a single shared formula in a spreadsheet?

// Enter one formula that automatically populates an entire block of cells in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1:C3").SetFormulaArray("={1,2,3}");
```
