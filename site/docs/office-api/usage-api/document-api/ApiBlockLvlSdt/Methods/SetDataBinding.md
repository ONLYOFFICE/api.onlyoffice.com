# SetDataBinding

Sets the data binding for the content control.

## Syntax

```javascript
expression.SetDataBinding(xmlMapping);
```

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| xmlMapping | Required | [XmlMapping](../../Enumeration/XmlMapping.md) \| null |  | The data binding to associate with the content control. |

## Returns

boolean

## Example

Link a content control to an XML data source in a document.

```javascript editor-docx
// How do I connect a content control to custom XML data in a document?

// Bind a content control to a specific XML field so it displays live data in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText = `
<?xml version="1.0" encoding="UTF-8"?>
<pic:documentData xmlns:pic="http://example.com/picture">
  <pic:text>123</pic:text>
</pic:documentData>`;
let partId = xmlManager.Add(xmlText).GetId();
let contentControl = Api.CreateBlockLvlSdt();
doc.Push(contentControl);
contentControl.SetDataBinding({
  prefixMapping : "xmlns:pic='http://example.com/picture'",
  storeItemID : partId,
  xpath : "/pic:documentData/pic:text"
});
```
