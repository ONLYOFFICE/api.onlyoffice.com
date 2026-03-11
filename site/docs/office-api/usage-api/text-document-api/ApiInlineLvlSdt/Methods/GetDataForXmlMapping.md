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

This example shows how to get the control data just as it would be filled in mapped xml

```javascript editor-docx
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
