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

Replace the text content inside a bookmark with new text in a document.

```javascript editor-docx
// How do I update the words covered by a bookmark in a document?

// Swap out a bookmark's original text for a revised value without removing the bookmark in a document.

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
