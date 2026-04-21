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

Convert points to lines in a spreadsheet.

```javascript editor-xlsx
// How can I convert points to lines in a spreadsheet?

// Convert points to lines in a spreadsheet.

const points = 100;
const lines = Api.PointsToLines(points);
const text = points + ' points are equal to ' + lines + ' lines.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);
```
