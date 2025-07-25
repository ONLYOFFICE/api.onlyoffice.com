# AddBookmark

Adds a bookmark to the specified range.

## Syntax

```javascript
expression.AddBookmark(sName);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sName | Required | String |  | The bookmark name. |

## Returns

boolean

## Example

This example adds a bookmark to the specified range.

```javascript editor-docx
// How to bookmark a range of document.

// Insert a bookmark into the 'ONLYOFFICE' range.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 9);
range.AddBookmark("Bookmark");
paragraph.AddLineBreak();
paragraph.AddText("A bookmark was added to the 'ONLYOFFICE' range.");
```
