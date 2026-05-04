# SetLink

Sets the hyperlink address.

## Syntax

```javascript
expression.SetLink(sLink);
```

`expression` - A variable that represents a [ApiHyperlink](../ApiHyperlink.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sLink | Required | string |  | The hyperlink address. |

## Returns

boolean

## Example

Set the hyperlink address in a document.

```javascript editor-docx
// How to change the link address of the hyperlink object in a document.

// Set link of the hyperlink in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("ONLYOFFICE Document Builder");
paragraph.AddElement(run);
let hyperlink = paragraph.AddHyperlink("https://api.onlyoffice.com/docbuilder/basic");
hyperlink.SetLink("https://api.onlyoffice.com/");
```
