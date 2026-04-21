# Clear

Clears the current range.

## Syntax

```javascript
expression.Clear();
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

Clear the range in a spreadsheet.

```javascript editor-xlsx
// How to clear a content of a range in a spreadsheet.

// Get a range and remove everything from it in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1:B1");
range.SetValue("1");
range.Clear();
worksheet.GetRange("A2").SetValue("The range A1:B1 was just cleared.");
```
