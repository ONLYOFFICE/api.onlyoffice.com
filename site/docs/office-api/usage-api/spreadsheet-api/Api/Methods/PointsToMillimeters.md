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

This example shows how to convert points to millimeters.

```javascript editor-xlsx
const points = 100;
const millimeters = Api.PointsToMillimeters(points);
const text = points + ' points are equal to ' + millimeters + ' millimeters.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);

```
