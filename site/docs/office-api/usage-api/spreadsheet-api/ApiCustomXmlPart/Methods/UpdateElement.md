# UpdateElement

Updates an XML element at the specified XPath.

## Syntax

```javascript
expression.UpdateElement(xPath, xmlStr);
```

`expression` - A variable that represents a [ApiCustomXmlPart](../ApiCustomXmlPart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| xPath | Required | string |  | The XPath of the node to update. |
| xmlStr | Required | string |  | The XML string to replace the node content with. |

## Returns

boolean

## Example

Update an XML element in a custom XML part in a spreadsheet.

```javascript editor-xlsx
// How do I update element in a spreadsheet?

// Update element using a custom XML part object in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const xmlManager = worksheet.GetCustomXmlParts();
const xmlString = '<content><text>Old value</text></content>';
const xml = xmlManager.Add(xmlString);

xml.UpdateElement('/content/text', '<text>New value</text>');
worksheet.GetRange('A1').SetValue('XML after update: ' + xml.GetXml());
```
