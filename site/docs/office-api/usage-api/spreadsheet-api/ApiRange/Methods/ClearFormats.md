# ClearFormats

Clears all formatting from the current range.

## Syntax

```javascript
expression.ClearFormats();
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

This example clears all the formatting in the range.

```javascript editor-xlsx playground
// How to clear formatting for a range.

// Get a range, clear formatting and show the result.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1:A2").SetValue("Example text")
worksheet.GetRange("A1:A2").SetBold(true);
let range = worksheet.GetRange("A1");
range.ClearFormats();
worksheet.GetRange("A3").SetValue("Result is bold format cleared for A1 cell.");

```
