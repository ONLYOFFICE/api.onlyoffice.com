# DEGREES

Converts radians to degrees.

## Syntax

```javascript
expression.DEGREES(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The angle in radians to convert. |

## Returns

number

## Example

Convert radians to degrees in a spreadsheet.

```javascript editor-xlsx
// How to convert radians to degrees in a spreadsheet.

// Use function to get degrees from radians in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.DEGREES(1.5));
```
