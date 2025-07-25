# GetClassType

Returns a type of the ApiComment class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"comment"

## Example

This example gets a class type and inserts it into the table.

```javascript editor-xlsx
// How to get a comment class type.

// Get an comment class type to show it in the worksheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
range.AddComment("This is just a number.");
let comment = range.GetComment();
let type = comment.GetClassType();
worksheet.GetRange("A3").SetValue("Type: " + type);
```
