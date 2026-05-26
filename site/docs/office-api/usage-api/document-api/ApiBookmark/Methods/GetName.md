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

Read the name of an existing bookmark in a document.

```javascript editor-docx
// How do I retrieve the name of a bookmark added to a text range in a document?

// Insert a bookmark and display its name as text in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 11);
range.AddBookmark("BookmarkName");
let bookmark = doc.GetBookmark("BookmarkName");
paragraph.AddLineBreak();
paragraph.AddText("Bookmark with name: " + bookmark.GetName());
```
