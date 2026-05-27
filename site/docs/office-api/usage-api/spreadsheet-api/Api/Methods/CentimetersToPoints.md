# CentimetersToPoints

Converts centimeters to points.

## Syntax

```javascript
expression.CentimetersToPoints(cm);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| cm | Required | number |  | The number of centimeters to convert to points. |

## Returns

number

## Example

Convert a measurement from centimeters to points and display the result in a spreadsheet.

```javascript editor-xlsx
// How do I translate centimeter values into points in a spreadsheet?

// Use a unit conversion to express a length in typographic points in a spreadsheet.

const centimeters = 1000;
const points = Api.CentimetersToPoints(centimeters);
const text = centimeters + ' centimeters are equal to ' + points + ' points.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);
```
