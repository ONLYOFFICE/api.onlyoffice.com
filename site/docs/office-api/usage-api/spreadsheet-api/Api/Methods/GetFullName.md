# GetFullName

Returns the full name of the currently opened file.

## Syntax

```javascript
expression.GetFullName();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Retrieve the complete file path of the currently opened document in a spreadsheet.

```javascript editor-xlsx
// How do I display the full name and location of the current file in a spreadsheet?

// Write the entire file path into a cell so the source is always visible in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let name = Api.GetFullName();
worksheet.GetRange("B1").SetValue("File name: " + name);
```
