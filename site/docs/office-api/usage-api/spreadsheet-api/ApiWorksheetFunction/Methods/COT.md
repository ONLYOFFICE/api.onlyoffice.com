# COT

Returns the cotangent of an angle.

## Syntax

```javascript
expression.COT(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The angle in radians for which the cotangent will be returned. |

## Returns

number

## Example

This example shows how to get the cotangent of a number.

```javascript editor-xlsx playground
// How to find a cotangent.

// Use function to get the cotangent of an angle.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.COT(0.785398));
```
