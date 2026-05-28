# DeleteAttribute

Deletes an attribute from the custom XML node.
If the attribute exists, it will be removed.

## Syntax

```javascript
expression.DeleteAttribute(name);
```

`expression` - A variable that represents a [ApiCustomXmlNode](../ApiCustomXmlNode.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | Required | string |  | The name of the attribute to delete. |

## Returns

boolean

## Example

Remove a named attribute from a custom XML node in a document.

```javascript editor-docx
// How do I delete an attribute from a custom XML node in a document?

// Strip unwanted metadata from an XML element by dropping one of its attributes in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText = `
<?xml version="1.0" encoding="UTF-8"?>
<bookstore>
    <book category="house" tag="#123">
        <title lang="en">The Odyssey</title>
        <author>Homer</author>
        <year>-740</year>
        <price>30.00</price>
    </book>
</bookstore>`;
let xml = xmlManager.Add(xmlText);
let node = xml.GetNodes('/bookstore/book')[0];
node.DeleteAttribute('category');
let attributes = node.GetAttributes();
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("Xml after deletion: " + xml.GetXml());
doc.Push(infoParagraph);
```
