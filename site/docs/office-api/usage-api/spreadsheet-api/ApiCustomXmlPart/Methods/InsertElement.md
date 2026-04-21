# InsertElement

Inserts an XML element at the specified XPath.

## Syntax

```javascript
expression.InsertElement(xPath, xmlStr, index);
```

`expression` - A variable that represents a [ApiCustomXmlPart](../ApiCustomXmlPart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| xPath | Required | string |  | The XPath of the parent node where the new element will be inserted. |
| xmlStr | Required | string |  | The XML string to insert. |
| index | Optional | number |  | The position at which to insert the new XML element. If omitted, the element will be appended as the last child. |

## Returns

boolean

## Example

Insert a new XML element into a custom XML part in a spreadsheet.

```javascript editor-xlsx
// How can I insert the element using a custom XML part in a spreadsheet?

// Insert the element for a custom XML part in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const xmlManager = worksheet.GetCustomXmlParts();
const xmlString = "<content version='9.4' />";
const xml = xmlManager.Add(xmlString);

xml.InsertElement('/content', '<text>lorem</text>');
worksheet.GetRange('A1').SetValue('XML after insertion:');
worksheet.GetRange('A2').SetValue(xml.GetXml());
```
