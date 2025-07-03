# CSC

Returns the cosecant of an angle.

## Syntax

```javascript
expression.CSC(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The angle in radians for which the cosecant will be returned. |

## Returns

number

## Example

This example shows how to get the cosecant of an angle.

```javascript editor-xlsx
// How to return cosecant.

// Use function to get the cosecant of an angle.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.CSC(0.785398));
```
