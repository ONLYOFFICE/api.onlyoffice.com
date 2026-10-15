# PixelsToEmus

Converts pixels to EMUs (English Metric Units).

## Syntax

```javascript
expression.PixelsToEmus(px);
```

`expression` - A variable that represents an [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| px | Required | number |  | The number of pixels to convert to EMUs. |

## Returns

number

## Example

Express a pixel count as english metric units in a spreadsheet.

```javascript editor-xlsx
// How do I turn a number of pixels into english metric units in a spreadsheet?

// Store the equivalent english metric unit value for a pixel measurement in a spreadsheet.

const pixels = 1080;
const emus = Api.PixelsToEmus(pixels);
const text = pixels + ' pixels are equal to ' + emus + ' english metric units.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);
```
