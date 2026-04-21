# AddHyperlink

Adds a hyperlink to a paragraph.

## Syntax

```javascript
expression.AddHyperlink(sLink, sScreenTipText, sBookmarkName);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sLink | Required | string |  | The link address. |
| sScreenTipText | Required | string |  | The screen tip text. |
| sBookmarkName | Required | string |  | name of a bookmark |

## Returns

[ApiHyperlink](../../ApiHyperlink/ApiHyperlink.md)

## Example

Add a hyperlink to a paragraph in a document.

```javascript editor-docx
// How to create a hyperlink and add it to the paragraph in a document.

// Add a paragraph hyperlink in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("ONLYOFFICE Document Builder");
paragraph.AddElement(run);
paragraph.AddHyperlink("https://api.onlyoffice.com/docbuilder/basic", "docbuilder");
```
