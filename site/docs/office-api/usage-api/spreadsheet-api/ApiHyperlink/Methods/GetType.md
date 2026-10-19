# GetType

Returns the type of the hyperlink.

## Syntax

```javascript
expression.GetType();
```

`expression` - A variable that represents an [ApiHyperlink](../ApiHyperlink.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

Get the type of a hyperlink.

```javascript editor-xlsx
// Useful for checking the type of a hyperlink attached to a cell range.

// Get the type of a hyperlink.

let worksheet = Api.GetActiveSheet();
worksheet.SetHyperlink("A1", "https://onlyoffice.com", null, "ONLYOFFICE", "Visit ONLYOFFICE");

let hyperlink = worksheet.GetHyperlinks()[0];

worksheet.GetRange("A3").SetValue("Hyperlink type: " + hyperlink.GetType());
```
