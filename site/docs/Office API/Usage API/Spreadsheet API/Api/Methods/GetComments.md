# GetComments

Returns all comments related to the whole workbook.

## Syntax

```javascript
expression.GetComments();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiComment[]](../../ApiComment/ApiComment.md)

## Example

This example shows how to get an array of ApiComment objects.

```javascript
Api.AddComment("Comment 1", "Bob");
Api.AddComment("Comment 2", "Bob" );
var arrComments = Api.GetComments();
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("Commet Text: ", arrComments[0].GetText());
oWorksheet.GetRange("B1").SetValue("Commet Author: ", arrComments[0].GetAuthorName());
```
