# SetNodeValue

Sets the XML content for the current node.

## Syntax

```javascript
expression.SetNodeValue(xml);
```

`expression` - A variable that represents a [ApiCustomXmlNode](../ApiCustomXmlNode.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| xml | Required | string |  | The XML string to set as the content of the current node. |

## Returns

boolean

## Example

Write a new value into an XML node to update its stored data in a spreadsheet.

```javascript editor-xlsx
// How do I change the value held by an XML node in a spreadsheet?

// Replace an existing node's content with fresh data in a spreadsheet.

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
bookNode.SetNodeValue('<book>Updated content</book>');
worksheet.GetRange('A1').SetValue('XML after update:');
worksheet.GetRange('B1').SetValue(xml.GetXml());
```
