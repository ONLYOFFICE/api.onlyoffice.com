# SetDataBinding

Sets the data binding for the current content control.

## Syntax

```javascript
expression.SetDataBinding(xmlMapping);
```

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| xmlMapping | Required | [XmlMapping](../../Enumeration/XmlMapping.md) \| null |  | The data binding to associate with the content control. |

## Returns

boolean

## Example

Bind an inline content control to custom XML data in a document.

```javascript editor-docx
// How do I link an inline content control to an XML data source in a document?

// Populate a content control automatically from structured XML stored inside the document.

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
```
