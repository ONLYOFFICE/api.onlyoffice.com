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

This example shows how to get an object that represents the selected range.

```javascript editor-xlsx
// How to get selected range object.

// Update the value of the selected range.

let worksheet = Api.GetActiveSheet();
Api.GetSelection().SetValue("selected");
```
