# UpdateAttribute

Updates an attribute of the XML node at the specified XPath.

## Syntax

```javascript
expression.UpdateAttribute(xPath, name, value);
```

`expression` - A variable that represents a [ApiCustomXmlPart](../ApiCustomXmlPart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| xPath | Required | string |  | The XPath of the node whose attribute should be updated. |
| name | Required | string |  | The name of the attribute to update. |
| value | Required | string |  | The new value for the attribute. |

## Returns

boolean

## Example

This example shows how to update the value of an attribute in a custom XML part element.

```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();
const xmlManager = worksheet.GetCustomXmlParts();
const xmlString = "<config version='1.0' namespace='http://api.onlyoffice.com' />";
const xml = xmlManager.Add(xmlString);

xml.UpdateAttribute('/config', 'version', '9.4');
worksheet.GetRange('A1').SetValue('XML after update: ' + xml.GetXml());

```
