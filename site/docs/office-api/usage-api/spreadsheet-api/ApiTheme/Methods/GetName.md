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

This example shows how to get the name of the current workbook theme.

```javascript editor-xlsx
const workbook = Api.GetActiveWorkbook();
const theme = workbook.GetTheme();
const themeName = theme.GetName();

const worksheet = Api.GetActiveSheet();
worksheet.GetRange('A1').SetValue('Theme name: ' + themeName);

```
