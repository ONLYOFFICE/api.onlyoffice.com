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

This example shows how to get the class type of an ApiTheme object.

```javascript editor-xlsx
const workbook = Api.GetActiveWorkbook();
const theme = workbook.GetTheme();
const classType = theme.GetClassType();

const worksheet = Api.GetActiveSheet();
worksheet.GetRange('A1').SetValue('Theme class type: ' + classType);

```
