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

This example sets the hyperlink display text.

```javascript editor-docx
// How to specify the hyperlink text that is displayed.

// Set the visible text of the link.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("ONLYOFFICE Document Builder");
paragraph.AddElement(run);
let hyperlink = paragraph.AddHyperlink("https://api.onlyoffice.com/docbuilder/basic");
hyperlink.SetDisplayedText("Api ONLYOFFICE DocBuilder");
```
