# GetWorksheetFunction

Returns the ApiWorksheetFunction object.

## Syntax

```javascript
expression.GetWorksheetFunction();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiWorksheetFunction](../../ApiWorksheetFunction/ApiWorksheetFunction.md)

## Example

This example shows how to use built-in functions using worksheet function objects.

```javascript editor-xlsx playground
// How to use system functions in a spreadsheets.

// Use built-in functions in a worksheet.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.ASC("text"));
```
