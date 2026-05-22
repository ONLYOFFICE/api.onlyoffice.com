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

Write readable text into an XML element to update its content in a spreadsheet.

```javascript editor-xlsx
// How do I change the text inside an XML node in a spreadsheet?

// Store a new text value inside an existing XML entry in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml = xmlManager.Add("<message></message>");
let messageNode = xml.GetNodes('/message')[0];
messageNode.SetText("Updated message from CustomXml!");
let updatedText = messageNode.GetText();
worksheet.GetRange("A1").SetValue("Updated message: " + updatedText);
```
