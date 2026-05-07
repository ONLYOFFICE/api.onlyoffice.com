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

Go to bookmark and select it in a document.

```javascript editor-docx
// Select a bookmark in a document.

// Select a bookmark from the documnet by getting it by its name in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(21, 28);
range.AddBookmark("BookmarkName");
let bookmark = doc.GetBookmark("BookmarkName");
bookmark.Select();
```
