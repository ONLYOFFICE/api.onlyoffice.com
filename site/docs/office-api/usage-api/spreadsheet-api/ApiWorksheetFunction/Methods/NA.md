# NA

Returns the *#N/A* error value which means "no value is available".

## Syntax

```javascript
expression.NA();
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Insert an N/A error value into a cell in a spreadsheet.

```javascript editor-xlsx
// Display "no value available" in a spreadsheet using a function.

// Add an error indicator when data is not available in a spreadsheet.

const worksheet = Api.GetActiveSheet(); 
let func = Api.WorksheetFunction;
let result = func.NA();
worksheet.GetRange("C3").SetValue(result);
```
