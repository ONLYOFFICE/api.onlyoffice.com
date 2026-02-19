# TODAY

Returns the current date in the *MM/dd/yy* format.

## Syntax

```javascript
expression.TODAY();
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

This example shows how to return the current date in the MM/dd/yy format.

```javascript editor-xlsx
// How to get a current date.

// Use a function to get current date in MM/dd/yy format.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.TODAY());
```
