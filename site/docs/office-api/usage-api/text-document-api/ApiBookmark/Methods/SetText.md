# SetText

Sets the bookmark text.

## Syntax

```javascript
expression.SetText(sText);
```

`expression` - A variable that represents a [ApiBookmark](../ApiBookmark.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | Required | string |  | The bookmark text. |

## Returns

boolean

## Example

This example shows how to set bookmark text.

```javascript editor-docx
// How to set a text to a bookmark.

// Get a bookmark from the document by its name then set its text.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range1 = doc.GetRange(0, 11);
range1.AddBookmark("BookmarkName");
let bookmark = doc.GetBookmark("BookmarkName");
let oldText = bookmark.GetText();
bookmark.SetText("New bookmark text");
paragraph.AddLineBreak();
paragraph.AddText("Bookmark text changed from: '" + oldText + "' to: '" + bookmark.GetText() + "'");

```
