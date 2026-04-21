# GetClassType

Returns a type of the ApiCustomXmlParts class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiCustomXmlParts](../ApiCustomXmlParts.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"customXmlParts"

## Example

Retrieve the class type of a custom XML parts in a document.

```javascript editor-docx
// How to identify the class type of a custom XML parts in a document?

// Obtain the class type identifier of a custom XML parts object in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let classType = xmlManager.GetClassType();
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("Class type: " + classType);
doc.Push(infoParagraph);
```
