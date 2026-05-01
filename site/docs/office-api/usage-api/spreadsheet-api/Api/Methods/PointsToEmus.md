# PointsToEmus

Converts points to EMUs (English Metric Units).

## Syntax

```javascript
expression.PointsToEmus(pt);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| pt | Required | number |  | The number of points to convert to EMUs. |

## Returns

number

## Example

Convert points to emus in a spreadsheet.

```javascript editor-xlsx
// How do I convert points to emus in a spreadsheet?

// Convert points to emus and display the result in a spreadsheet.

const points = 1000;
const emus = Api.PointsToEmus(points);
const text = points + ' points are equal to ' + emus + ' english metric units.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);
```
