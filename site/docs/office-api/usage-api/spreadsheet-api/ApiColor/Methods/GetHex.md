# GetHex

Gets the HEX string representation of the color.

## Syntax

```javascript
expression.GetHex();
```

`expression` - A variable that represents a [ApiColor](../ApiColor.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Get the HEX string of a shape fill color in a spreadsheet.

```javascript editor-xlsx
// How do I get the hex in a spreadsheet?

// Get the hex using a color object in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const color = Api.RGB(255, 111, 61);

const fill = Api.CreateSolidFill(color);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
worksheet.AddShape("rect", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);

worksheet.GetRange("A12").SetValue("Hex: " + color.GetHex());
```
