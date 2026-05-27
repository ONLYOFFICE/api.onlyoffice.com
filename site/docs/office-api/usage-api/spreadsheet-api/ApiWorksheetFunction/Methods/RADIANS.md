# RADIANS

Converts degrees to radians.

## Syntax

```javascript
expression.RADIANS(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | An angle in degrees to convert. |

## Returns

number

## Example

Convert an angle measurement from degrees to radians in a spreadsheet.

```javascript editor-xlsx
// How do I change an angle from degrees to radians in a spreadsheet?

// Transform a degree value into its radian equivalent in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.RADIANS(90));
```
