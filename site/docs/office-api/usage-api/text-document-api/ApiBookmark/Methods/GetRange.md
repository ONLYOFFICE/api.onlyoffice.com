# GetRange

Returns the bookmark range.

## Syntax

```javascript
expression.GetRange();
```

`expression` - A variable that represents a [ApiBookmark](../ApiBookmark.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiRange](../../ApiRange/ApiRange.md)

## Example

Get bookmark range in a document.

```javascript editor-docx
// How to add a bookmark and then make its range bold in a document.

// Highlight the range of a bookmark in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 11);
range.AddBookmark("BookmarkName");
let bookmark = doc.GetBookmark("BookmarkName");
let bookmarkRange = bookmark.GetRange();
bookmarkRange.SetBold(true);
paragraph.AddLineBreak();
paragraph.AddText("Bookmark range is shown in bold");
```
