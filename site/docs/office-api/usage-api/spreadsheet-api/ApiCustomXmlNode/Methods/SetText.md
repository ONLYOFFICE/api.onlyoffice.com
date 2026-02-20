# SetText

Sets the text content of the current XML node.

## Syntax

```javascript
expression.SetText(str);
```

`expression` - A variable that represents a [ApiCustomXmlNode](../ApiCustomXmlNode.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| str | Required | string |  | The text content to set for the node. |

## Returns

boolean

## Example

This example shows how to set the text content of a custom XML node.

```javascript editor-xlsx playground
// How to update text content in custom XML node elements.

// Set text for message node.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml = xmlManager.Add("<message></message>");
let messageNode = xml.GetNodes('/message')[0];
messageNode.SetText("Updated message from CustomXml!");
let updatedText = messageNode.GetText();
worksheet.GetRange("A1").SetValue("Updated message: " + updatedText);
```
