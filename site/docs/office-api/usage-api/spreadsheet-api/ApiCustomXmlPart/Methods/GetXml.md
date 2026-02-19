# GetXml

Retrieves the XML string from the custom XML part.

## Syntax

```javascript
expression.GetXml();
```

`expression` - A variable that represents a [ApiCustomXmlPart](../ApiCustomXmlPart.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example shows how to get the XML content of a custom XML part.

```javascript editor-xlsx
// How to get the XML content of an XML part.

// Get XML content.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml = xmlManager.Add("<report><title>Monthly Report</title><date>2024-01-01</date></report>");
let xmlContent = xml.GetXml();
worksheet.GetRange("A1").SetValue("XML content:");
worksheet.GetRange("A2").SetValue(xmlContent);
```
