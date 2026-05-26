# Add

Creates a child node for the current XML node.

## Syntax

```javascript
expression.Add(nodeName);
```

`expression` - A variable that represents a [ApiCustomXmlNode](../ApiCustomXmlNode.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nodeName | Required | string |  | The name of the new child node. |

## Returns

[ApiCustomXmlNode](../../ApiCustomXmlNode/ApiCustomXmlNode.md)

## Example

Insert a new child element under an existing XML node in a spreadsheet.

```javascript editor-xlsx
// How do I append a nested element to a custom XML node in a spreadsheet?

// Expand an embedded XML structure by adding a sub-node to an existing parent in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml = xmlManager.Add("<content xmlns='http://example'><text>Hello World!</text></content>");
let rootNode = xml.GetNodes("/content")[0];
let textNode = rootNode.Add("text");
let classType = textNode.GetClassType();
worksheet.GetRange("A1").SetValue("Class type: " + classType);
```
