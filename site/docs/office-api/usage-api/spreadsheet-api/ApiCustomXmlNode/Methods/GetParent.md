# GetParent

Returns the parent of the current XML node.

## Syntax

```javascript
expression.GetParent();
```

`expression` - A variable that represents a [ApiCustomXmlNode](../ApiCustomXmlNode.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiCustomXmlNode](../../ApiCustomXmlNode/ApiCustomXmlNode.md) \| null

## Example

This example shows how to get the parent of a custom XML node.

```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();
const xmlManager = worksheet.GetCustomXmlParts();
const xmlString = `
<zoo>
	<animal species='Lion'>
		<name>Leo</name>
	</animal>
</zoo>`;
const xml = xmlManager.Add(xmlString);

const animalNode = xml.GetNodes('/zoo/animal')[0];
const parentNode = animalNode.GetParent();
const grandParent = parentNode.GetParent();

worksheet.GetRange('A1').SetValue('Parent node name: ' + parentNode.GetNodeName());
worksheet.GetRange('A2').SetValue('Grand parent: ' + grandParent);

```
