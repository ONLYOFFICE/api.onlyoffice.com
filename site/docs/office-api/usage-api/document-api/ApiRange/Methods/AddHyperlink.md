# AddHyperlink

Adds a hyperlink to the specified range.

## Syntax

```javascript
expression.AddHyperlink(sLink, sScreenTipText, sBookmarkName);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sLink | Required | string |  | The link address. |
| sScreenTipText | Required | string |  | The screen tip text. |
| sBookmarkName | Required | string |  | name of a bookmark |

## Returns

[ApiHyperlink](../../ApiHyperlink/ApiHyperlink.md)

## Example

Turn a selected portion of text into a clickable hyperlink in a document.

```javascript editor-docx
// How do I attach a web address to a specific word or phrase in a document?

// Make a passage navigable by binding it to an external URL in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 11);
range.AddHyperlink("https://www.onlyoffice.com/", "Main portal");
```
