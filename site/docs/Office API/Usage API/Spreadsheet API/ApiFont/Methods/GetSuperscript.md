# GetSuperscript

Returns the superscript property of the specified font.

## Syntax

expression.GetSuperscript();

`expression` - A variable that represents a [ApiFont](../ApiFont.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean | null

## Example

This example shows how to get the superscript property of the specified font.

```javascript
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(9, 4);
var oFont = oCharacters.GetFont();
oFont.SetSuperscript(true);
var bSuperscript = oFont.GetSuperscript();
oWorksheet.GetRange("B3").SetValue("Superscript property: " + bSuperscript);
```
