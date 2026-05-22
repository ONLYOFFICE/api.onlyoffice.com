# ATAN2

Returns the arctangent of the specified x and y coordinates, in radians between -Pi and Pi, excluding -Pi.

## Syntax

```javascript
expression.ATAN2(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The x coordinate of the point. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The y coordinate of the point. |

## Returns

number

## Example

Calculate the arctangent of a point defined by x and y coordinates in a spreadsheet.

```javascript editor-xlsx
// Get the angle in radians from a pair of coordinates in a spreadsheet.

// Determine direction from the origin to a specific point in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ATAN2(1, -9));
```
