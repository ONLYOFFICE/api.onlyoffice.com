# GetBookmarkRange

Returns a bookmark range.

## Syntax

```javascript
expression.GetBookmarkRange(sName);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sName | Required | string |  | The bookmark name. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md) \| null

## Example

Get a bookmark range in a document.

```javascript editor-docx
// Get a range with a bookmark with specific name in a document.

// How to retrieve a range bookmarked and set it bold in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 9);
range.AddBookmark("Bookmark");
range = doc.GetBookmarkRange("Bookmark");
range.SetBold(true);
```
