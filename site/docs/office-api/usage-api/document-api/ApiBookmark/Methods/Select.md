# Select

Selects the current bookmark.

## Syntax

```javascript
expression.Select();
```

`expression` - A variable that represents a [ApiBookmark](../ApiBookmark.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Programmatically select the text range of a named bookmark in a document.

```javascript editor-docx
// How do I highlight a bookmark's content as a selection in a document?

// Bring a bookmark's text into focus so it is ready for editing or formatting in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(21, 28);
range.AddBookmark("BookmarkName");
let bookmark = doc.GetBookmark("BookmarkName");
bookmark.Select();
```
