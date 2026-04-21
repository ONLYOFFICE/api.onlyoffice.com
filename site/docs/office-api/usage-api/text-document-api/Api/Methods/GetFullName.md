# GetFullName

Returns the full name of the currently opened file.

## Syntax

```javascript
expression.GetFullName();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Get a document name and insert it into the document.

```javascript editor-docx
// Return the first paragraph of the document and add the document full name to it.

// Return the full name of the currently opened file and write it to the first paragraph of the document.

let paragraph = Api.GetDocument().GetElement(0);
paragraph.AddText("File name: " + Api.GetFullName());
```
