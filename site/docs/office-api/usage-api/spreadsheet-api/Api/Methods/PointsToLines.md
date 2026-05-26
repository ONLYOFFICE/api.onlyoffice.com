# PointsToLines

Converts points to lines (1 line = 12 points).

## Syntax

```javascript
expression.PointsToLines(pt);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| pt | Required | number |  | The number of points to convert to lines. |

## Returns

number

## Example

Convert a measurement from points to lines in a spreadsheet.

```javascript editor-xlsx
// How do I express a point value as lines in a spreadsheet?

// Get the line-unit equivalent of a given number of points in a spreadsheet.

const points = 100;
const lines = Api.PointsToLines(points);
const text = points + ' points are equal to ' + lines + ' lines.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);
```
