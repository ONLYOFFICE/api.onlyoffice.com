# GetNodeValue

Returns the XML string representation of the current node content.

## Syntax

```javascript
expression.GetNodeValue();
```

`expression` - A variable that represents a [ApiCustomXmlNode](../ApiCustomXmlNode.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example shows how to get the value of a custom XML node.

```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();
const xmlManager = worksheet.GetCustomXmlParts();
const xmlString = `
<zoo>
	<animal species='Lion'>
		<name>Leo</name>
		<age>5</age>
	</animal>
</zoo>`;
const xml = xmlManager.Add(xmlString);

const animalNode = xml.GetNodes('/zoo/animal')[0];
const nodeValue = animalNode.GetNodeValue();
worksheet.GetRange('A1').SetValue('Node value: ' + nodeValue);

```
