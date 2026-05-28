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

Read the unique identifier of a custom XML part in a document.

```javascript editor-docx
// How do I get the ID assigned to a custom XML part in a document?

// Store or reference a custom XML part by its ID for later lookup in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xml = xmlManager.Add("<content xmlns='http://example'></content>");
let xmlId = xml.GetId();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Custom XML ID: " + xmlId);
doc.Push(paragraph);
```
