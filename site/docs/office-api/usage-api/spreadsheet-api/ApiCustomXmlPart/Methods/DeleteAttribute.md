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

Delete an attribute from a custom XML part element in a spreadsheet.

```javascript editor-xlsx
// How to delete the attribute for a custom XML part in a spreadsheet?

// Delete the attribute and display the result in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const xmlManager = worksheet.GetCustomXmlParts();
const xmlString = "<config version='1.0' namespace='http://example' />";
const xml = xmlManager.Add(xmlString);

xml.DeleteAttribute('/config', 'namespace');
worksheet.GetRange('A1').SetValue('XML after deletion: ' + xml.GetXml());
```
