# GetLocale

Returns the current locale ID.

## Syntax

```javascript
expression.GetLocale();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

Get the current locale ID in a spreadsheet.

```javascript editor-xlsx
// How to set and get current locale ID in a spreadsheet.

// Get region ID and insert information into the cell.

let worksheet = Api.GetActiveSheet();
Api.SetLocale("en-CA");
let locale = Api.GetLocale();
worksheet.GetRange("A1").SetValue("Locale: " + locale);
```
