# SetScreenTipText

Sets the screen tip text of the hyperlink.

## Syntax

```javascript
expression.SetScreenTipText(sScreenTipText);
```

`expression` - A variable that represents a [ApiHyperlink](../ApiHyperlink.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sScreenTipText | Required | string |  | The screen tip text of the hyperlink. |

## Returns

boolean

## Example

Set the tooltip text that appears when hovering over a hyperlink in a document.

```javascript editor-docx
// How do I add a screen tip to a hyperlink in a document?

// Provide a descriptive hover message for a link to guide readers in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("ONLYOFFICE Document Builder");
paragraph.AddElement(run);
let hyperlink = paragraph.AddHyperlink("https://api.onlyoffice.com/docbuilder/basic");
hyperlink.SetScreenTipText("ONLYOFFICE for developers");
let screenTipText = hyperlink.GetScreenTipText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Screen tip text: " + screenTipText);
doc.Push(paragraph);
```
