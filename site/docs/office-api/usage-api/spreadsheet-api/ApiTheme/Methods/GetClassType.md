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

Retrieve the class type of a theme in a spreadsheet.

```javascript editor-xlsx
// How to identify the class type of a theme in a spreadsheet?

// Obtain the class type identifier of a theme object in a spreadsheet.

const workbook = Api.GetActiveWorkbook();
const theme = workbook.GetTheme();
const classType = theme.GetClassType();

const worksheet = Api.GetActiveSheet();
worksheet.GetRange('A1').SetValue('Theme class type: ' + classType);
```
