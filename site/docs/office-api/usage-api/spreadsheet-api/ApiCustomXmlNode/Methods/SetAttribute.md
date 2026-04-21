# SetAttribute

Sets an attribute for the custom XML node.
If the attribute already exists, it will not be modified.

## Syntax

```javascript
expression.SetAttribute(name, value);
```

`expression` - A variable that represents a [ApiCustomXmlNode](../ApiCustomXmlNode.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | Required | string |  | The name of the attribute to set. |
| value | Required | string |  | The value to assign to the attribute. |

## Returns

boolean

## Example

Set an attribute value on a custom XML node in a spreadsheet.

```javascript editor-xlsx
// How to set attributes on custom XML node elements in a spreadsheet.

// Set attributes on product node in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml = xmlManager.Add("<product></product>");
let productNode = xml.GetNodes('/product')[0];
productNode.SetAttribute("id", "456");
productNode.SetAttribute("name", "Desktop Computer");
productNode.SetAttribute("price", "1299");
let updatedXml = xml.GetXml();
worksheet.GetRange("A1").SetValue("Updated XML:");
worksheet.GetRange("A2").SetValue(updatedXml);
```
