# DeleteBookmark

Removes a bookmark from the document, if one exists.

## Syntax

```javascript
expression.DeleteBookmark(sName);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sName | Required | string |  | The bookmark name. |

## Returns

boolean

## Example

Delete a named bookmark from a text range in a document.

```javascript editor-docx
// How do I remove a bookmark by name after it is no longer needed in a document?

// Clean up temporary navigation markers once they have served their purpose in a document.

let doc = Api.GetDocument(); 
let paragraph = doc.GetElement(0); 
paragraph.AddText("ONLYOFFICE Document Builder "); 
let range = doc.GetRange(0, 9); 
range.AddBookmark("Bookmark"); 
doc.DeleteBookmark("Bookmark");
paragraph = Api.CreateParagraph();
paragraph.AddText("The bookmark was removed from this document.");
doc.Push(paragraph);
```
