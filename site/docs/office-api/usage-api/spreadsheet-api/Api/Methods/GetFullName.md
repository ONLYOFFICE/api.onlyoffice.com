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

Get the full name of the currently opened file in a spreadsheet.

```javascript editor-xlsx
// How to get a full name of the file in a spreadsheet.

// Insert a full name of the file into a cell.

let worksheet = Api.GetActiveSheet();
let name = Api.GetFullName();
worksheet.GetRange("B1").SetValue("File name: " + name);
```
