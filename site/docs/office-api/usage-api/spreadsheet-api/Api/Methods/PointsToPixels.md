# PointsToPixels

Converts points to pixels.

## Syntax

```javascript
expression.PointsToPixels(pt);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| pt | Required | number |  | The number of points to convert to pixels. |

## Returns

number

## Example

Convert a measurement from points to pixels in a spreadsheet.

```javascript editor-xlsx
// How do I express a point value as pixels in a spreadsheet?

// Get the pixel equivalent of a given number of points in a spreadsheet.

const points = 1000;
const pixels = Api.PointsToPixels(points);
const text = points + ' points are equal to ' + pixels + ' pixels.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);
```
