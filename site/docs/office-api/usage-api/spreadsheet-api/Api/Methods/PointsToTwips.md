# PointsToTwips

Converts points to twips.

## Syntax

```javascript
expression.PointsToTwips(pt);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| pt | Required | number |  | The number of points to convert to twips. |

## Returns

number

## Example

Convert points to twips in a spreadsheet.

```javascript editor-xlsx
// How to convert points to twips in a spreadsheet?

// Convert points to twips using the spreadsheet API.

const points = 1000;
const twips = Api.PointsToTwips(points);
const text = points + ' points are equal to ' + twips + ' twips.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);
```
