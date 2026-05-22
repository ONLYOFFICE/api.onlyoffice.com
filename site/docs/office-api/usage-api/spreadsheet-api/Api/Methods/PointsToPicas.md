# PointsToPicas

Converts points to picas (1 pica = 12 points).

## Syntax

```javascript
expression.PointsToPicas(pt);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| pt | Required | number |  | The number of points to convert to picas. |

## Returns

number

## Example

Convert a measurement from points to picas in a spreadsheet.

```javascript editor-xlsx
// How do I express a point value as picas in a spreadsheet?

// Get the pica equivalent of a given number of points in a spreadsheet.

const points = 42;
const picas = Api.PointsToPicas(points);
const text = points + ' points are equal to ' + picas + ' picas.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);
```
