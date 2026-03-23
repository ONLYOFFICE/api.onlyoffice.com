# InsertAttribute

Inserts an attribute into the XML node at the specified XPath.

## Syntax

```javascript
expression.InsertAttribute(xPath, name, value);
```

`expression` - A variable that represents a [ApiCustomXmlPart](../ApiCustomXmlPart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| xPath | Required | string |  | The XPath of the node to insert the attribute into. |
| name | Required | string |  | The name of the attribute to insert. |
| value | Required | string |  | The value of the attribute to insert. |

## Returns

boolean

## Example

This example shows how to insert an attribute into a custom XML part element.

```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();
const xmlManager = worksheet.GetCustomXmlParts();
const xmlString = '<config />';
const xml = xmlManager.Add(xmlString);

xml.InsertAttribute('/config', 'version', '9.4');
worksheet.GetRange('A1').SetValue('XML after insertion:');
worksheet.GetRange('A2').SetValue(xml.GetXml());

```
