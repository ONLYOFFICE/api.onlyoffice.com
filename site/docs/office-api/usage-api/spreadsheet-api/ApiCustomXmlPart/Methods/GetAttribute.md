# GetAttribute

Returns an attribute from the XML node at the specified XPath.

## Syntax

```javascript
expression.GetAttribute(xPath, name);
```

`expression` - A variable that represents a [ApiCustomXmlPart](../ApiCustomXmlPart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| xPath | Required | string |  | The XPath of the node from which to get the attribute. |
| name | Required | string |  | The name of the attribute to find. |

## Returns

string \| null

## Example

Read the value of a named property from an XML element in a spreadsheet.

```javascript editor-xlsx
// How do I look up what a specific attribute on an XML node is set to in a spreadsheet?

// Extract configuration data stored as an XML attribute for use in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml = xmlManager.Add("<config version='1.0' xmlns='http://example'><setting>value</setting></config>");
let rootNodes = xml.GetNodes('/config');
if (rootNodes.length > 0) {
    let version = rootNodes[0].GetAttribute('version');
    worksheet.GetRange("A1").SetValue("Config version: " + version);
} else {
    worksheet.GetRange("A1").SetValue("No root node found");
}
```
