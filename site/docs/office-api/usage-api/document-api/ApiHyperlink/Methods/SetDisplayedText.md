# SetDisplayedText

Sets the hyperlink display text.

## Syntax

```javascript
expression.SetDisplayedText(sDisplay);
```

`expression` - A variable that represents a [ApiHyperlink](../ApiHyperlink.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sDisplay | Required | string |  | The text to display the hyperlink. |

## Returns

boolean

## Example

Set the displayed text of a hyperlink in a document.

```javascript editor-docx
// How do I change the visible label of a hyperlink in a document?

// Replace the default link text with a custom readable name in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("ONLYOFFICE Document Builder");
paragraph.AddElement(run);
let hyperlink = paragraph.AddHyperlink("https://api.onlyoffice.com/docbuilder/basic");
hyperlink.SetDisplayedText("Api ONLYOFFICE DocBuilder");
```
