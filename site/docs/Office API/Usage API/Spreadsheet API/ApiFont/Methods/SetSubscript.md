# SetSubscript

Sets the subscript property to the specified font.
💡 This method will work only with the text format of the cell.

## Syntax

expression.SetSubscript(isSubscript);

`expression` - A variable that represents a [ApiFont](../ApiFont.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isSubscript | Required | boolean |  | Specifies that the text characters are displayed subscript. |

## Returns

This method doesn't return any data.

## Example

This example sets the subscript property to the specified font.

```javascript
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(9, 4);
var oFont = oCharacters.GetFont();
oFont.SetSubscript(true);
```
