# Add

Adds a new custom XML part to the XML manager.

## Syntax

```javascript
expression.Add(xml);
```

`expression` - A variable that represents a [ApiCustomXmlParts](../ApiCustomXmlParts.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| xml | Required | string |  | The XML string to be added. |

## Returns

[ApiCustomXmlPart](../../ApiCustomXmlPart/ApiCustomXmlPart.md)

## Example

This example shows how to add a new custom XML part and then access it.

```javascript editor-xlsx
// How to add a custom XML part to the workbook.

// Add a new XML part.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let newXml = xmlManager.Add("<content xmlns='http://example' version='1.0'></content>");
worksheet.GetRange("A1").SetValue("New XML part added: " + newXml.GetXml());
```
