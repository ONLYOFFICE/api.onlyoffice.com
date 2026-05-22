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

Change the URL of a hyperlink in a document.

```javascript editor-docx
// How do I update the address a hyperlink points to in a document?

// Point an existing hyperlink to a different website in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("ONLYOFFICE Document Builder");
paragraph.AddElement(run);
let hyperlink = paragraph.AddHyperlink("https://api.onlyoffice.com/docbuilder/basic");
hyperlink.SetLink("https://api.onlyoffice.com/");
```
