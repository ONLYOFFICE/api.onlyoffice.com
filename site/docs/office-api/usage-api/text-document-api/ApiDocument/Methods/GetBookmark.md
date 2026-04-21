# GetBookmark

Returns a bookmark by its name from the current document.

## Syntax

```javascript
expression.GetBookmark(sBookmarkName);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sBookmarkName | Required | string |  | The bookmark name. |

## Returns

[ApiBookmark](../../ApiBookmark/ApiBookmark.md)

## Example

Get bookmark in document in a document.

```javascript editor-docx
// Get a bookmark added by its name in a document.

// How to retrieve a bookmark and display its name in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range1 = doc.GetRange(0, 11);
range1.AddBookmark("Bookmark_ex");
let bookmark = doc.GetBookmark("Bookmark_ex");
paragraph.AddLineBreak();
paragraph.AddText("Bookmark with name '" + bookmark.GetName() + "' surrounds text: " + bookmark.GetText());
```
