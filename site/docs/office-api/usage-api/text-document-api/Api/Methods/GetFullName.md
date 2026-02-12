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

This example gets a document name and inserts it into the document.

```javascript editor-docx playground
// Returns the first paragraph of the document and adds the document full name to it.

// How to get the full name of the current document and add it to the paragraph.

// Returns the full name of the currently opened file and write it to the first paragraph of the document.

let paragraph = Api.GetDocument().GetElement(0);
paragraph.AddText("File name: " + Api.GetFullName());
```
