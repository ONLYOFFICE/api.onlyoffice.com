# TwipsToPoints

Converts twips to points.

## Syntax

```javascript
expression.TwipsToPoints(twips);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| twips | Required | number |  | The number of twips to convert to points. |

## Returns

number

## Example

Convert twips to points in a spreadsheet.

```javascript editor-xlsx
// How do I convert twips to points in a spreadsheet?

// Convert twips to points and display the result in a spreadsheet.

const twips = 100;
const points = Api.TwipsToPoints(twips);
const text = twips + ' twips are equal to ' + points + ' points.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);
```
