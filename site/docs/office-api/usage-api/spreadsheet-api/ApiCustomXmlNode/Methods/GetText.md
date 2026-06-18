# GetText

Returns the inner text of the current node and its child nodes.
For example: `\<text\>123\<one\>4\</one\>\</text\>` returns `"1234"`.

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

Read the plain text stored inside an XML element in a spreadsheet.

```javascript editor-xlsx
// How do I extract readable text from an XML node in a spreadsheet?

// Pull out the human-readable content of an XML entry in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml = xmlManager.Add("<message>Hello from custom XML!</message>");
let messageNode = xml.GetNodes('/message')[0];
let text = messageNode.GetText();
worksheet.GetRange("A1").SetValue("Message: " + text);
```
