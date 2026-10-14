# AddHyperlink

Adds a hyperlink to a paragraph.

## Syntax

```javascript
expression.AddHyperlink(link, screenTipText, bookmarkName);
```

`expression` - A variable that represents an [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| link | Required | string |  | The link address. |
| screenTipText | Required | string |  | The screen tip text. |
| bookmarkName | Required | string |  | name of a bookmark |

## Returns

[ApiHyperlink](../../ApiHyperlink/ApiHyperlink.md) \| null \| undefined

## Example

Insert a clickable hyperlink into a paragraph in a document.

```javascript editor-docx
// How do I attach an external URL to text inside a paragraph in a document?

// Make a word or phrase navigate to a web page by embedding a link directly in paragraph content in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("Visit ONLYOFFICE for developers");
paragraph.AddElement(run);
paragraph.AddHyperlink("https://api.onlyoffice.com", "docbuilder");
```
