# Delete

Deletes the current XML node.

## Syntax

```javascript
expression.Delete();
```

`expression` - A variable that represents a [ApiCustomXmlNode](../ApiCustomXmlNode.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Remove a specific node from embedded custom XML data in a document.

```javascript editor-docx
// How do I delete a custom XML node in a document?

// Clean up stored XML by eliminating an unwanted element from the tree in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xml = xmlManager.Add('<content><text>First</text><text>Second</text></content>');
let textNode = xml.GetNodes('/content/text')[0];
textNode.Delete();
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("XML text: " + xml.GetXml());
doc.Push(infoParagraph);
```
