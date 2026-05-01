# GetCount

Returns a number of custom XML parts in the XML manager.

## Syntax

```javascript
expression.GetCount();
```

`expression` - A variable that represents a [ApiCustomXmlParts](../ApiCustomXmlParts.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

Get the count of custom XML parts in the XML manager in a document.

```javascript editor-docx
// How do I get the count in a document?

// Get the count using a custom XML parts object in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
xmlManager.Add("<products><item><name>Laptop</name><price>999</price></item></products>");
xmlManager.Add("<user><name>John Doe</name><email>john@example.com</email></user>");
let count = xmlManager.GetCount();
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("There are " + count + " custom XML parts in the document.");
doc.Push(infoParagraph);
```
