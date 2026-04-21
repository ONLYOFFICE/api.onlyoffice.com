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

Get the name of the current workbook theme in a spreadsheet.

```javascript editor-xlsx
// How to get the name for a theme in a spreadsheet?

// Get the name and display the result in a spreadsheet.

const workbook = Api.GetActiveWorkbook();
const theme = workbook.GetTheme();
const themeName = theme.GetName();

const worksheet = Api.GetActiveSheet();
worksheet.GetRange('A1').SetValue('Theme name: ' + themeName);
```
