# ClearContents

Clears all contents from the current range.

## Syntax

```javascript
expression.ClearContents();
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

This example clears all the contents in the range.

```javascript editor-xlsx
// How to clear contents for a range.

// Get a range, clear contents and show the result.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1:B1").SetValue("Example text");
let range = worksheet.GetRange("A1");
range.ClearContents();
worksheet.GetRange("A2").SetValue("Result is contents cleared for A1 cell.");

```
