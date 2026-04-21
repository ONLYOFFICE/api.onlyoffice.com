# CreateNewHistoryPoint

Creates a new history point.

## Syntax

```javascript
expression.CreateNewHistoryPoint();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

Create a new history point in a spreadsheet.

```javascript editor-xlsx
// Add history point for a range in a spreadsheet.

// How to make a history point in a spreadsheet.

var worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("This is just a sample text.");
Api.CreateNewHistoryPoint();
worksheet.GetRange("A3").SetValue("New history point was just created.");
```
