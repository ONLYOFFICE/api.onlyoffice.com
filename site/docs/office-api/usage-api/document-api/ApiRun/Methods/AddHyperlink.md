# AddHyperlink

Adds a hyperlink to the current run.

## Syntax

```javascript
expression.AddHyperlink(sLink, sScreenTipText, sBookmarkName);
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sLink | Required | string |  | The link address. |
| sScreenTipText | Required | string |  | The screen tip text. |
| sBookmarkName | Required | string |  | name of a bookmark |

## Returns

[ApiHyperlink](../../ApiHyperlink/ApiHyperlink.md)

## Example

Turn a text run into a clickable link pointing to a web address in a document.

```javascript editor-docx
// How do I make a piece of text open a website when clicked in a document?

// Attach a URL and a tooltip title to a run of text so readers can follow it in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("ONLYOFFICE Document Builder");
paragraph.AddElement(run);
run.AddHyperlink("https://www.onlyoffice.com", "main page");
```
