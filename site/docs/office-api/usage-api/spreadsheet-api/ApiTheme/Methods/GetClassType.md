# GetClassType

Returns a type of the ApiTheme class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiTheme](../ApiTheme.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"theme"

## Example

Read the class type of the active workbook theme in a spreadsheet.

```javascript editor-xlsx
// How do I identify what type of object a theme is in a spreadsheet?

// Confirm the category of a theme object and write the result to a cell in a spreadsheet.

const workbook = Api.GetActiveWorkbook();
const theme = workbook.GetTheme();
const classType = theme.GetClassType();

const worksheet = Api.GetActiveSheet();
worksheet.GetRange('A1').SetValue('Theme class type: ' + classType);
```
