# GetDataForXmlMapping

Returns the content control data for the XML mapping.

## Syntax

```javascript
expression.GetDataForXmlMapping();
```

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Extract the text value of an inline content control as it appears in XML mapping in a document.

```javascript editor-docx
// How do I retrieve the XML-mapped data from an inline content control in a document?

// Output the raw control value to verify what would be written to a bound XML store in a document.

let doc = Api.GetDocument();
let contentControl = Api.CreateInlineLvlSdt();
contentControl.AddText("This is an inline content control.");
let paragraph = doc.GetElement(0);
paragraph.Push(contentControl);

let data = contentControl.GetDataForXmlMapping();
paragraph = Api.CreateParagraph();
paragraph.AddText(data);
doc.Push(paragraph);
```
