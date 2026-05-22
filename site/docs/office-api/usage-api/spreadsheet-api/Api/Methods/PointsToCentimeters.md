# PointsToCentimeters

Converts points to centimeters.

## Syntax

```javascript
expression.PointsToCentimeters(pt);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| pt | Required | number |  | The number of points to convert to centimeters. |

## Returns

number

## Example

Convert a measurement from points to centimeters in a spreadsheet.

```javascript editor-xlsx
// How do I express a point value as centimeters in a spreadsheet?

// Get the centimeter equivalent of a given number of points in a spreadsheet.

const points = 1000;
const centimeters = Api.PointsToCentimeters(points);
const text = points + ' points are equal to ' + centimeters + ' centimeters.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);
```
