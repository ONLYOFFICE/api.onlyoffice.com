# Delete

Deletes the XML from the custom XML manager.

## Syntax

```javascript
expression.Delete();
```

`expression` - A variable that represents a [ApiCustomXmlPart](../ApiCustomXmlPart.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example demonstrates how to delete a custom XML part.

```javascript editor-docx playground
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xml1 = xmlManager.Add("<user xmlns='http://example'>John</user>");
let xml2 = xmlManager.Add("<customer xmlns='http://example'>Alex</customer>");
xml1.Delete();
let count = xmlManager.GetCount();
let xmlParts = xmlManager.GetAll();
let infoParagraph = Api.CreateParagraph();
xmlParts.forEach(part => {
    infoParagraph.AddText("XML part: " + part.GetXml());
});
doc.Push(infoParagraph);
```
