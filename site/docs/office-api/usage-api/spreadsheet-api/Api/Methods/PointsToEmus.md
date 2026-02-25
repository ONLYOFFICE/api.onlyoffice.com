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

This example shows how to convert points to emus.

```javascript editor-xlsx playground
const points = 1000;
const emus = Api.PointsToEmus(points);
const text = points + ' points are equal to ' + emus + ' english metric units.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);

```
