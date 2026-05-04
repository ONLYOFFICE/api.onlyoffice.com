# GoTo

Moves a cursor to the current bookmark.

## Syntax

```javascript
expression.GoTo();
```

`expression` - A variable that represents a [ApiBookmark](../ApiBookmark.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Go to bookmark and select it in a document.

```javascript editor-docx
// Get a bookmark by its name and then jump to it in a document.

// Select a bookmark from the documnet by going to it in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(21, 28);
range.AddBookmark("BookmarkName");
let bookmark = doc.GetBookmark("BookmarkName");
bookmark.GoTo();
```
