# GetText

Returns the inner text of the current node and its child nodes.
For example: `&lt;text&gt;123&lt;one&gt;4&lt;/one&gt;&lt;/text&gt;` returns `"1234"`.

## Syntax

```javascript
expression.GetText();
```

`expression` - A variable that represents a [ApiCustomXmlNode](../ApiCustomXmlNode.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Get the text content of a custom XML node in a spreadsheet.

```javascript editor-xlsx
// How to retrieve text content from custom XML node elements in a spreadsheet.

// Get text from message node in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml = xmlManager.Add("<message>Hello from custom XML!</message>");
let messageNode = xml.GetNodes('/message')[0];
let text = messageNode.GetText();
worksheet.GetRange("A1").SetValue("Message: " + text);
```
