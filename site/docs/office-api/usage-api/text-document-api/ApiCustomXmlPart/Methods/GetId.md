# GetId

Returns the ID of the custom XML part.

## Syntax

```javascript
expression.GetId();
```

`expression` - A variable that represents a [ApiCustomXmlPart](../ApiCustomXmlPart.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Retrieve the ID of a custom XML part in a document.

```javascript editor-docx
// How do I get the id in a document?

// Get the id using a custom XML part object in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xml = xmlManager.Add("<content xmlns='http://example'></content>");
let xmlId = xml.GetId();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Custom XML ID: " + xmlId);
doc.Push(paragraph);
```
