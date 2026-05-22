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

Access the currently highlighted cells and write a value into them in a spreadsheet.

```javascript editor-xlsx
// How do I work with whatever cells the user has selected at the moment in a spreadsheet?

// Fill the active selection with text without specifying a fixed address in a spreadsheet.

let worksheet = Api.GetActiveSheet();
Api.GetSelection().SetValue("selected");
```
