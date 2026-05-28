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

Show the file name of the current document inside the document itself.

```javascript editor-docx
// How do I display the full name of the open file in a document?

// Write the path and name of the currently open file into the first paragraph in a document.

let paragraph = Api.GetDocument().GetElement(0);
paragraph.AddText("File name: " + Api.GetFullName());
```
