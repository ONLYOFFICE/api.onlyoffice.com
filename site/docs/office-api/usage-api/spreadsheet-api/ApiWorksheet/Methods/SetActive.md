# SetActive

Makes the current sheet active.

## Syntax

```javascript
expression.SetActive();
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Switch focus to a specific sheet in a spreadsheet.

```javascript editor-xlsx
// How do I make a particular sheet the active one in a spreadsheet?

// Bring a named sheet to the foreground so it becomes the working sheet in a spreadsheet.

Api.AddSheet("New_sheet");
let sheet = Api.GetSheet("New_sheet");
sheet.SetActive();
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("The current sheet is active.");
```
