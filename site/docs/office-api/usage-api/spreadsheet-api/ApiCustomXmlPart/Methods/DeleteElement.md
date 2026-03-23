# DeleteElement

Deletes an XML element at the specified XPath.

## Syntax

```javascript
expression.DeleteElement(xPath);
```

`expression` - A variable that represents a [ApiCustomXmlPart](../ApiCustomXmlPart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| xPath | Required | string |  | The XPath of the node to delete. |

## Returns

boolean

## Example

This example shows how to delete an XML element from a custom XML part.

```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();
const xmlManager = worksheet.GetCustomXmlParts();
const xmlString = `
<content>
	<text>example_text</text>
	<extra>remove me</extra>
</content>`;
const xml = xmlManager.Add(xmlString);

xml.DeleteElement('/content/extra');
worksheet.GetRange('A1').SetValue('XML after deletion: ' + xml.GetXml());

```
