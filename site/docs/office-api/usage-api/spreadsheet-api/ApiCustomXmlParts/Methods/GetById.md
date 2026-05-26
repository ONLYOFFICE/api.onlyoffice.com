# GetById

Returns a custom XML part by its ID from the XML manager.

## Syntax

```javascript
expression.GetById(xmlPartId);
```

`expression` - A variable that represents a [ApiCustomXmlParts](../ApiCustomXmlParts.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| xmlPartId | Required | string |  | The XML part ID. |

## Returns

[ApiCustomXmlPart](../../ApiCustomXmlPart/ApiCustomXmlPart.md) \| null

## Example

Look up a specific stored XML block using its unique identifier in a spreadsheet.

```javascript editor-xlsx
// How do I find a particular XML entry by its ID in a spreadsheet?

// Locate a single XML block precisely when its identifier is already known in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml = xmlManager.Add("<inventory><item>Book</item></inventory>");
let id = xml.GetId();
let retrievedXml = xmlManager.GetById(id);
if (retrievedXml) {
    worksheet.GetRange("A1").SetValue("Found XML part: " + retrievedXml.GetXml());
} else {
    worksheet.GetRange("A1").SetValue("XML part not found");
}
```
