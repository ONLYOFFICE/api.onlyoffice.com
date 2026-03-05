# DeleteAttribute

Deletes an attribute from the XML node at the specified XPath.

## Syntax

```javascript
expression.DeleteAttribute(xPath, name);
```

`expression` - A variable that represents a [ApiCustomXmlPart](../ApiCustomXmlPart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| xPath | Required | string |  | The XPath of the node from which to delete the attribute. |
| name | Required | string |  | The name of the attribute to delete. |

## Returns

boolean

## Example

This example shows how to delete an attribute from a custom XML part element.

```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();
const xmlManager = worksheet.GetCustomXmlParts();
const xmlString = "<config version='1.0' namespace='http://example' />";
const xml = xmlManager.Add(xmlString);

xml.DeleteAttribute('/config', 'namespace');
worksheet.GetRange('A1').SetValue('XML after deletion: ' + xml.GetXml());

```
