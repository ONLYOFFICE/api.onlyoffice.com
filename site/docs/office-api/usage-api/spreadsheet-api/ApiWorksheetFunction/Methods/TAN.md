# TAN

Returns the tangent of an angle.

## Syntax

```javascript
expression.TAN(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The angle in radians for which the tangent will be returned. If the argument is in degrees, multiply it by *PI()/180*. |

## Returns

number

## Example

Return the tangent of an angle in a spreadsheet.

```javascript editor-xlsx
// Calculate the tangent of an angle using the TAN function.

// Returns the tangent value of the specified angle in radians.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.TAN(0.5));
```
