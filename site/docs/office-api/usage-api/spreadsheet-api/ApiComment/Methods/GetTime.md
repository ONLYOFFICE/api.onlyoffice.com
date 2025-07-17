# GetTime

Returns the timestamp of the comment creation in the current time zone format.

## Syntax

```javascript
expression.GetTime();
```

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

Number

## Example

This example shows how to get the timestamp of the comment creation in the current time zone format.

```javascript editor-xlsx
// How to get a time when a comment was created.

// Add a comment creation timestamp to a range of the worksheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.");
worksheet.GetRange("A3").SetValue("Timestamp: ");
worksheet.GetRange("B3").SetValue(comment.GetTime());
```
