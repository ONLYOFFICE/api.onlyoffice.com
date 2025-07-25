# AddHyperlink

Adds a hyperlink to the current run.

## Syntax

```javascript
expression.AddHyperlink(sLink, sScreenTipText);
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sLink | Required | string |  | The link address. |
| sScreenTipText | Required | string |  | The screen tip text. |

## Returns

[ApiHyperlink](../../ApiHyperlink/ApiHyperlink.md) \| null

## Example

This example adds a hyperlink to the run.

```javascript editor-docx
// How to add a link to the text.

// Insert a hyperlink to the run indicating its link and title.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("ONLYOFFICE Document Builder");
paragraph.AddElement(run);
run.AddHyperlink("https://www.onlyoffice.com", "main page");
```
