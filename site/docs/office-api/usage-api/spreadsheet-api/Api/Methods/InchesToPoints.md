# InchesToPoints

Converts inches to points.

## Syntax

```javascript
expression.InchesToPoints(inches);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| inches | Required | number |  | The number of inches to convert to points. |

## Returns

number

## Example

Turn an inch measurement into points in a spreadsheet.

```javascript editor-xlsx
// How do I convert a size given in inches to points in a spreadsheet?

// Show the equivalent point value for a given number of inches in a spreadsheet.

const inches = 100;
const points = Api.InchesToPoints(inches);
const text = inches + ' inches are equal to ' + points + ' points.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);
```
