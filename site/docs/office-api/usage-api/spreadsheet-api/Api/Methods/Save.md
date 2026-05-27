# Save

Saves changes to the specified document.

## Syntax

```javascript
expression.Save();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Persist all unsaved edits to disk in a spreadsheet.

```javascript editor-xlsx
// How do I make sure all recent changes are written and not lost in a spreadsheet?

// Commit the current state of the document so no work is discarded in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("This sample text is saved to the worksheet.");
Api.Save();
```
