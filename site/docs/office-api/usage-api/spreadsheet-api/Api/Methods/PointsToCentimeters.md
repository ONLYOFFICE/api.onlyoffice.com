# PointsToCentimeters

Converts points to centimeters.

## Syntax

```javascript
expression.PointsToCentimeters(pt);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| pt | Required | number |  | The number of points to convert to centimeters. |

## Returns

number

## Example

This example shows how to convert points to centimeters.

```javascript editor-xlsx
const points = 1000;
const centimeters = Api.PointsToCentimeters(points);
const text = points + ' points are equal to ' + centimeters + ' centimeters.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);

```
