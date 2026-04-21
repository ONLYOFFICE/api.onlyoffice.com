# PointsToMillimeters

Converts points to millimeters.

## Syntax

```javascript
expression.PointsToMillimeters(pt);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| pt | Required | number |  | The number of points to convert to millimeters. |

## Returns

number

## Example

Convert points to millimeters in a spreadsheet.

```javascript editor-xlsx
// How can I convert points to millimeters in a spreadsheet?

// Convert points to millimeters in a spreadsheet.

const points = 100;
const millimeters = Api.PointsToMillimeters(points);
const text = points + ' points are equal to ' + millimeters + ' millimeters.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);
```
