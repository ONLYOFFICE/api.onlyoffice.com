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

This example shows how to create a new child node and insert it as a child of the current XML node.

```javascript editor-xlsx playground
// How to add a child node to an XML node.

// Add a new child node.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml = xmlManager.Add("<content xmlns='http://example'><text>Hello World!</text></content>");
let rootNode = xml.GetNodes("/content")[0];
let textNode = rootNode.Add("text");
let classType = textNode.GetClassType();
worksheet.GetRange("A1").SetValue("Class type: " + classType);
```
