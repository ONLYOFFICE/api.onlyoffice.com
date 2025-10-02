# NOW

Returns the current date and time in the *MM/dd/yy hh:mm* format.

## Syntax

```javascript
expression.NOW();
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

This example shows how to return the current date and time in the MM/dd/yy hh:mm format.

```javascript editor-xlsx
// How to get a current date in the specified format.

// Use a function to get a current date and time in the specified format.

const worksheet = Api.GetActiveSheet();

let func = Api.GetWorksheetFunction();
let ans = func.NOW(); 

worksheet.GetRange("C1").SetValue(ans);

```
