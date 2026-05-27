# GetDataForXmlMapping

Returns the content control data for the XML mapping.

## Syntax

```javascript
expression.GetDataForXmlMapping();
```

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Read the text of a content control exactly as it would appear in exported XML in a document.

```javascript editor-docx
// How do I get the text from a content control in the form used for XML export in a document?

// Extract the plain text value of a content control for use in XML mapping in a document.

let doc = Api.GetDocument();
let contentControl = Api.CreateBlockLvlSdt();
contentControl.GetContent().GetElement(0).AddText("This is a block text content control.");
doc.AddElement(0, contentControl);

let data = contentControl.GetDataForXmlMapping();
let paragraph = Api.CreateParagraph();
paragraph.AddText(data);
doc.Push(paragraph);
```
