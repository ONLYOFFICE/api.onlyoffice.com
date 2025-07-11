# NA

Returns the &lt;em&gt;#N/A&lt;/em&gt; error value which means "no value is available".

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

This example shows how to return the N/A error value which means "no value is available".

```javascript editor-xlsx
// How to return the N/A.

// Use a function to get a N/A error value.

const worksheet = Api.GetActiveSheet(); 
let func = Api.GetWorksheetFunction();
let result = func.NA();
worksheet.GetRange("C3").SetValue(result);

```
