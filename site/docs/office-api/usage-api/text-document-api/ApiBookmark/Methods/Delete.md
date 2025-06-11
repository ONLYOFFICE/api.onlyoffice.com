# Delete

Deletes the current bookmark from the document.

## Syntax

```javascript
expression.Delete();
```

`expression` - A variable that represents a [ApiBookmark](../ApiBookmark.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example shows how to delete bookmark from document.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range1 = doc.GetRange(0, 11);
range1.AddBookmark("Bookmark 1");
let range2 = doc.GetRange(14, 22);
range2.AddBookmark("Bookmark 2");
let bookmark1 = doc.GetBookmark("Bookmark 1");
bookmark1.Delete();

```
