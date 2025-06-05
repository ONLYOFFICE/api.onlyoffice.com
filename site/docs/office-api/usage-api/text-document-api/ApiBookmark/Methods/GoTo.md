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

This example shows how to go to bookmark and select it.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(21, 28);
range.AddBookmark("BookmarkName");
let bookmark = doc.GetBookmark("BookmarkName");
bookmark.GoTo();

```
