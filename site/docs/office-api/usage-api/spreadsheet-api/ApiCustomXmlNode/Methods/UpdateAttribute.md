# UpdateAttribute

Updates the value of an existing attribute in the custom XML node.
If the attribute doesn't exist, the update will not occur.

## Syntax

```javascript
expression.UpdateAttribute(name, value);
```

`expression` - A variable that represents a [ApiCustomXmlNode](../ApiCustomXmlNode.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | Required | string |  | The name of the attribute to update. |
| value | Required | string |  | The new value to assign to the attribute. |

## Returns

boolean

## Example

This example shows how to update the value of an existing attribute in a custom XML node.

```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();
const xmlManager = worksheet.GetCustomXmlParts();
const xmlString = `
<bookstore>
	<book category='fiction'>
		<title>The Odyssey</title>
	</book>
</bookstore>`;
const xml = xmlManager.Add(xmlString);
const bookNode = xml.GetNodes('/bookstore/book')[0];

bookNode.UpdateAttribute('category', 'ancient');

const attributes = bookNode.GetAttributes();
worksheet.GetRange('A1').SetValue('Updated attribute: ' + attributes[0].name + '=' + attributes[0].value);

```
