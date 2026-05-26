# EmusToPoints

Converts EMUs (English Metric Units) to points.

## Syntax

```javascript
expression.EmusToPoints(emu);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| emu | Required | number |  | The number of EMUs to convert to points. |

## Returns

number

## Example

Convert a measurement from EMUs to points in a spreadsheet.

```javascript editor-xlsx
// How do I change a size value from EMUs into points in a spreadsheet?

// Express a dimension in points rather than EMUs in a spreadsheet.

const emus = 100;
const points = Api.EmusToPoints(emus);
const text = emus + ' emus are equal to ' + points + ' points.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);
```
