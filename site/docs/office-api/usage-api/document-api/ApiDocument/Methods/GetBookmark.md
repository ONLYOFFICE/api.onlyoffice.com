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

Retrieve a named bookmark from a document.

```javascript editor-docx
// How do I find a bookmark by name in a document?

// Look up a bookmark to read the text it covers in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range1 = doc.GetRange(0, 11);
range1.AddBookmark("Bookmark_ex");
let bookmark = doc.GetBookmark("Bookmark_ex");
paragraph.AddLineBreak();
paragraph.AddText("Bookmark with name '" + bookmark.GetName() + "' surrounds text: " + bookmark.GetText());
```
