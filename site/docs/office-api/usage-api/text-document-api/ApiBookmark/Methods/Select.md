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

This example shows how to go to bookmark and select it.

```javascript editor-docx playground
// Select a bookmark.

// Select a bookmark from the documnet by getting it by its name.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(21, 28);
range.AddBookmark("BookmarkName");
let bookmark = doc.GetBookmark("BookmarkName");
bookmark.Select();

```
