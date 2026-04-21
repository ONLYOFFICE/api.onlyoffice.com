# PixelsToPoints

Converts pixels to points.

## Syntax

```javascript
expression.PixelsToPoints(px);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| px | Required | number |  | The number of pixels to convert to points. |

## Returns

number

## Example

Convert pixels to points in a spreadsheet.

```javascript editor-xlsx
// How can I convert pixels to points in a spreadsheet?

// Convert pixels to points in a spreadsheet.

const pixels = 100;
const points = Api.PixelsToPoints(pixels);
const text = pixels + ' pixels are equal to ' + points + ' points.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);
```
