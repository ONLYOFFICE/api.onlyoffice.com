# GetClassType

Returns a type of the ApiColor class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiColor](../ApiColor.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"color"

## Example

Check the class label reported by a color object built for a spreadsheet.

```javascript editor-xlsx
// How do I confirm the type name of a color object before passing it on in a spreadsheet?

// Apply a color to a cell and write the class type reported by that color into another cell.

const worksheet = Api.GetActiveSheet();
const color = Api.RGB(255, 111, 61);

worksheet.GetRange("A2").SetValue("Text with color");
worksheet.GetRange("A2").SetFontColor(color);
worksheet.GetRange("A4").SetValue("Class type = " + color.GetClassType());
```
