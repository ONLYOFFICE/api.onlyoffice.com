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

Jump the cursor to a named bookmark's location in a document.

```javascript editor-docx
// How do I navigate directly to a bookmark by name in a document?

// Move focus to a specific marked position so the reader lands at the right spot in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(21, 28);
range.AddBookmark("BookmarkName");
let bookmark = doc.GetBookmark("BookmarkName");
bookmark.GoTo();
```
