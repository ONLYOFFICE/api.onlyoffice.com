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

Attach a new block of XML data to a workbook in a spreadsheet.

```javascript editor-xlsx
// How do I store custom XML content inside a workbook in a spreadsheet?

// Embed structured XML so it travels with the file when saved in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let newXml = xmlManager.Add("<content xmlns='http://example' version='1.0'></content>");
worksheet.GetRange("A1").SetValue("New XML part added: " + newXml.GetXml());
```
