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

This example shows how to convert points to twips.

```javascript editor-xlsx playground
const points = 1000;
const twips = Api.PointsToTwips(points);
const text = points + ' points are equal to ' + twips + ' twips.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);

```
