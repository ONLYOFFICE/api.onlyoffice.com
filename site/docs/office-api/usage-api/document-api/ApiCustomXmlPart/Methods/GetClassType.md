# GetClassType

Returns a type of the ApiCustomXmlPart class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiCustomXmlPart](../ApiCustomXmlPart.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"customXmlPart"

## Example

Get the class type of a custom XML part in a document.

```javascript editor-docx
// How do I identify what kind of object a custom XML part is in a document?

// Verify the object type before performing type-specific operations in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xml = xmlManager.Add("<content xmlns='http://example' version='1.0'></content>");
let classType = xml.GetClassType();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + classType);
doc.Push(paragraph);
```
