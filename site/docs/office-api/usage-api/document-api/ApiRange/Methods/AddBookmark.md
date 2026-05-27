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

Mark a specific section of text with a named bookmark in a document.

```javascript editor-docx
// How do I attach a named bookmark to a selected portion of text in a document?

// Label a text selection so it can be referenced or navigated to later in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 9);
range.AddBookmark("Bookmark");
paragraph.AddLineBreak();
paragraph.AddText("A bookmark was added to the 'ONLYOFFICE' range.");
```
