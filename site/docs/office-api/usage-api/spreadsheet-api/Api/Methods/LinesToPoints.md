# LinesToPoints

Converts lines to points (1 line = 12 points).

## Syntax

```javascript
expression.LinesToPoints(lines);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| lines | Required | number |  | The number of lines to convert to points. |

## Returns

number

## Example

Convert lines to points in a spreadsheet.

```javascript editor-xlsx
// How to convert lines to points in a spreadsheet?

// Convert lines to points using the spreadsheet API.

const lines = 100;
const points = Api.LinesToPoints(lines);
const text = lines + ' lines are equal to ' + points + ' points.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);
```
