# TRANSPOSE

Converts a vertical range of cells to a horizontal range, or vice versa.

## Syntax

```javascript
expression.TRANSPOSE(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| (number \| string \| boolean)[] |  | A range of cells on a worksheet or an array that will be transposed. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md)

## Example

This example shows how to convert a vertical range of cells to a horizontal range, or vice versa.

```javascript editor-xlsx playground
// How to change orientation of cells to vertical/horizontal.

// Use a function to transpose a range.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue("Ann");
worksheet.GetRange("A2").SetValue("Bob");
worksheet.GetRange("B1").SetValue("Apples");
worksheet.GetRange("B2").SetValue("ranges");
let range = worksheet.GetRange("A1:B2");
worksheet.GetRange("A4:B5").SetValue(func.TRANSPOSE(range));
```
