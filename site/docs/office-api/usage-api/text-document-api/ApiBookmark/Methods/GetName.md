# GetName

Returns the bookmark name.

## Syntax

```javascript
expression.GetName();
```

`expression` - A variable that represents a [ApiBookmark](../ApiBookmark.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example shows how to get bookmark name.

```javascript editor-docx playground
// How to add a bookmark indicating its name and then display it.

// Show current bookmark name.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 11);
range.AddBookmark("BookmarkName");
let bookmark = doc.GetBookmark("BookmarkName");
paragraph.AddLineBreak();
paragraph.AddText("Bookmark with name: " + bookmark.GetName());

```
