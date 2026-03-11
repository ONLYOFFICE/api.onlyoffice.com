# GetDataBinding

Retrieves the data binding of the content control.

## Syntax

```javascript
expression.GetDataBinding();
```

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[XmlMapping](../../Enumeration/XmlMapping.md)

## Example

This example shows how to retrieve the data binding of an inline content control.

```javascript editor-docx
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText = `
<?xml version="1.0" encoding="UTF-8"?>
<pic:documentData xmlns:pic="http://example.com/picture">
  <pic:text>123</pic:text>
</pic:documentData>`;
let partId = xmlManager.Add(xmlText).GetId();
let contentControl = Api.CreateInlineLvlSdt();
contentControl.SetDataBinding({
  prefixMapping : "xmlns:pic='http://example.com/picture'",
  storeItemID : partId,
  xpath : "/pic:documentData/pic:text"
});
let paragraph = doc.GetElement(0);
paragraph.Push(contentControl);

let dataBinding = contentControl.GetDataBinding();
paragraph = Api.CreateParagraph();
paragraph.AddText(dataBinding.storeItemID);
doc.Push(paragraph);
```
