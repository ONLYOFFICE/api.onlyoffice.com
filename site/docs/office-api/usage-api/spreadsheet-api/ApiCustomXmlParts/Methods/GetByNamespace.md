# GetByNamespace

Returns custom XML parts by namespace from the XML manager.

## Syntax

```javascript
expression.GetByNamespace(namespace);
```

`expression` - A variable that represents a [ApiCustomXmlParts](../ApiCustomXmlParts.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| namespace | Required | string |  | The namespace of the XML parts. |

## Returns

[ApiCustomXmlPart](../../ApiCustomXmlPart/ApiCustomXmlPart.md)[]

## Example

Get custom XML parts by their namespace in a spreadsheet.

```javascript editor-xlsx
// How to retrieve custom XML parts using their namespace in a spreadsheet.

// Get XML parts by namespace in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
xmlManager.Add("<config xmlns='http://example.com/config'><setting>value1</setting></config>");
xmlManager.Add("<data xmlns='http://example.com/data'><entry>value2</entry></data>");
xmlManager.Add("<info xmlns='http://example.com/config'><detail>value3</detail></info>");
let configParts = xmlManager.GetByNamespace("http://example.com/config");
worksheet.GetRange("A1").SetValue("Found " + configParts.length + " XML parts with config namespace:");
for (let i = 0; i < configParts.length; i++) {
    worksheet.GetRange("A" + (i + 2)).SetValue("Config part " + (i + 1) + ": " + configParts[i].GetXml());
}
```
