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

Replace the XML content of a custom XML node in a spreadsheet.

```javascript editor-xlsx
// How can I set xml using a custom XML node in a spreadsheet?

// Set xml for a custom XML node in a spreadsheet.

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
