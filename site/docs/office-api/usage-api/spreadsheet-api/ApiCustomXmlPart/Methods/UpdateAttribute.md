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

Change the value of an existing attribute on an XML element in a spreadsheet.

```javascript editor-xlsx
// How do I overwrite the current value of a named property on an XML node in a spreadsheet?

// Revise stored XML metadata by updating a specific attribute to a new value in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const xmlManager = worksheet.GetCustomXmlParts();
const xmlString = "<config version='1.0' namespace='http://api.onlyoffice.com' />";
const xml = xmlManager.Add(xmlString);

xml.UpdateAttribute('/config', 'version', '9.4');
worksheet.GetRange('A1').SetValue('XML after update: ' + xml.GetXml());
```
