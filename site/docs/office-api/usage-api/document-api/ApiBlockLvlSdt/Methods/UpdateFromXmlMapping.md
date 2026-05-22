# UpdateFromXmlMapping

Updates the content control using the value from the XML mapping.

## Syntax

```javascript
expression.UpdateFromXmlMapping();
```

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Refresh a content control to display updated XML data in a document.

```javascript editor-docx
// How do I update a content control after its linked XML data changes in a document?

// Change the value in an XML source and pull the new text into a content control in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText = `
<?xml version="1.0" encoding="UTF-8"?>
<pic:documentData xmlns:pic="http://example.com/picture">
  <pic:text>123</pic:text>
</pic:documentData>`;
let xmlPart = xmlManager.Add(xmlText);
let contentControl = Api.CreateBlockLvlSdt();
doc.Push(contentControl);
contentControl.SetDataBinding({
  prefixMapping : "xmlns:pic='http://example.com/picture'",
  storeItemID : xmlPart.GetId(),
  xpath : "/pic:documentData/pic:text"
});
let nodes = xmlPart.GetNodes('/pic:documentData/pic:text');
let node = nodes[0];
node.SetText('987');
contentControl.UpdateFromXmlMapping();

let paragraph = Api.CreateParagraph();
paragraph.AddText(contentControl.GetContent().GetText());
doc.Push(paragraph);
```
