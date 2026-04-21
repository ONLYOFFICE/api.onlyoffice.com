# GetSelection

Returns an object that represents the selected range.

## Syntax

```javascript
expression.GetSelection();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiRange](../../ApiRange/ApiRange.md)

## Example

Get an object that represents the selected range in a spreadsheet.

```javascript editor-xlsx
// How to get selected range object in a spreadsheet.

// Update the value of the selected range in a spreadsheet.

let worksheet = Api.GetActiveSheet();
Api.GetSelection().SetValue("selected");
```
