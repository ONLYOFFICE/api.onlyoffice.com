# Delete

Deletes all the contents from the current range.

## Syntax

```javascript
expression.Delete();
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example deletes all the contents from the range.

```javascript editor-docx playground
// How to clear the content of the range.

// Delete the text from the content.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE delete text Document Builder");
let range = doc.GetRange(10, 21);
range.Delete();
```
