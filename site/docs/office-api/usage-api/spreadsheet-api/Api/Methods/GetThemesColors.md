# GetThemesColors

Returns a list of all the available theme colors for the spreadsheet.

## Syntax

```javascript
expression.GetThemesColors();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string[]

## Example

Retrieve all available theme colors in a spreadsheet.

```javascript editor-xlsx
// How do I get a list of every theme color used in a spreadsheet?

// Display the full set of theme color names in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let themes = Api.GetThemesColors();
for (let i = 0; i < themes.length; ++i) {
    worksheet.GetRange("A" + (i + 1)).SetValue(themes[i]);
}
```
