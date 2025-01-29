# GetCaption

Returns a string value that represents the text of the specified range of characters.

## Syntax

expression.GetCaption();

`expression` - A variable that represents a [ApiCharacters](../ApiCharacters.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example shows how to get a string value that represents the text of the specified range of characters.

```javascript
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(23, 4);
var sCaption = oCharacters.GetCaption();
oWorksheet.GetRange("B3").SetValue("Caption: " + sCaption);
```
