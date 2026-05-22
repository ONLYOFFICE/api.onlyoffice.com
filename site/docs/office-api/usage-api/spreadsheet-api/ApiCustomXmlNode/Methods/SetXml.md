# SetXml

Sets the XML content of the current XML node.

## Syntax

```javascript
expression.SetXml(strXml);
```

`expression` - A variable that represents a [ApiCustomXmlNode](../ApiCustomXmlNode.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| strXml | Required | string |  | The XML string to set as the node content. |

## Returns

boolean

## Example

Overwrite an XML node with entirely new markup in a spreadsheet.

```javascript editor-xlsx
// How do I replace the contents of an XML node with different XML in a spreadsheet?

// Swap out a node's structure by supplying a fresh XML fragment in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const xmlManager = worksheet.GetCustomXmlParts();
const xmlString = `
<bookstore>
	<book>
		<title>The Odyssey</title>
		<author>Homer</author>
	</book>
</bookstore>`;
const xml = xmlManager.Add(xmlString);

const bookNode = xml.GetNodes('/bookstore/book')[0];
bookNode.SetXml('<book><title>New Book</title></book>');
worksheet.GetRange('A1').SetValue('XML after replacement:');
worksheet.GetRange('A2').SetValue(xml.GetXml());
```
