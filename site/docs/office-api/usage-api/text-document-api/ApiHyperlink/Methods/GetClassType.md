# GetClassType

Returns a type of the ApiHyperlink class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiHyperlink](../ApiHyperlink.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"hyperlink"

## Example

Find out the class type of a hyperlink object in a document.

```javascript editor-docx
// How can I get the class type of a hyperlink in a document?

// Get the class type of a hyperlink and display it in the document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("ONLYOFFICE Document Builder");
paragraph.AddElement(run);
let hyperlink = paragraph.AddHyperlink("https://api.onlyoffice.com/docbuilder/basic");
let classType = hyperlink.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + classType);
doc.Push(paragraph);
```
