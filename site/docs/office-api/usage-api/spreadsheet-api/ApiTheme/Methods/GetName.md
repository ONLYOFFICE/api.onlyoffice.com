# GetName

Returns the name of the theme.

## Syntax

```javascript
expression.GetName();
```

`expression` - A variable that represents a [ApiTheme](../ApiTheme.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Retrieve the name of the active workbook theme in a spreadsheet.

```javascript editor-xlsx
// How do I find out what the current theme is called in a spreadsheet?

// Read the theme name and write it to a cell in a spreadsheet.

const workbook = Api.GetActiveWorkbook();
const theme = workbook.GetTheme();
const themeName = theme.GetName();

const worksheet = Api.GetActiveSheet();
worksheet.GetRange('A1').SetValue('Theme name: ' + themeName);
```
