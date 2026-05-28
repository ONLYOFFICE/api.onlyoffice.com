# GetClassType

Returns a type of the ApiRange class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"range"

## Example

Identify the object type of a cell range in a spreadsheet.

```javascript editor-xlsx
// How do I find out what kind of object a cell range is in a spreadsheet?

// Write the type label of a range into another cell to confirm its category.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
range.SetValue("This is just a sample text in the cell A1.");
let classType = range.GetClassType();
worksheet.GetRange('A3').SetValue("Class type: " + classType);
```
