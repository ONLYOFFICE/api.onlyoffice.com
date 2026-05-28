# PicasToPoints

Converts picas to points.

## Syntax

```javascript
expression.PicasToPoints(pc);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| pc | Required | number |  | The number of picas to convert to points. |

## Returns

number

## Example

Express a pica measurement as points in a spreadsheet.

```javascript editor-xlsx
// How do I turn a value in picas into its equivalent in points in a spreadsheet?

// Display a typographic size converted from picas to points in a spreadsheet.

const picas = 100;
const points = Api.PicasToPoints(picas);
const text = picas + ' picas are equal to ' + points + ' points.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);
```
