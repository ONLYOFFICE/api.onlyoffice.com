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

This example shows how to delete an attribute from a custom XML node.

```javascript editor-xlsx
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
