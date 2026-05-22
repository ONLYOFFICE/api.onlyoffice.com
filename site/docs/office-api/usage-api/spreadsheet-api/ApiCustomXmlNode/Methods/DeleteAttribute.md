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

Remove a named attribute from an XML node stored in a spreadsheet.

```javascript editor-xlsx
// How do I strip a specific attribute from a custom XML element in a spreadsheet?

// Clean up XML metadata by dropping an attribute and confirming the change in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const xmlManager = worksheet.GetCustomXmlParts();
const xmlString = `
<bookstore>
	<book category='fiction' status='available'>
		<title>The Odyssey</title>
	</book>
</bookstore>`;
const xml = xmlManager.Add(xmlString);
const bookNode = xml.GetNodes('/bookstore/book')[0];

bookNode.DeleteAttribute('category');

const attributes = bookNode.GetAttributes();
worksheet.GetRange('A1').SetValue('Remaining attributes count: ' + attributes.length);
worksheet.GetRange('A2').SetValue('XML after deletion: ' + xml.GetXml());
```
