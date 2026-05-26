# PointsToInches

Converts points to inches.

## Syntax

```javascript
expression.PointsToInches(pt);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| pt | Required | number |  | The number of points to convert to inches. |

## Returns

number

## Example

Convert a measurement from points to inches in a spreadsheet.

```javascript editor-xlsx
// How do I express a point value as inches in a spreadsheet?

// Get the inch equivalent of a given number of points in a spreadsheet.

const points = 1000;
const inches = Api.PointsToInches(points);
const text = points + ' points are equal to ' + inches + ' inches.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);
```
