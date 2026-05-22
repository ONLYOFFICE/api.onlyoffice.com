# GetNodes

Returns nodes from the custom XML node based on the given XPath.

## Syntax

```javascript
expression.GetNodes(xPath);
```

`expression` - A variable that represents a [ApiCustomXmlNode](../ApiCustomXmlNode.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| xPath | Required | string |  | The XPath expression to match nodes. |

## Returns

[ApiCustomXmlNode](../../ApiCustomXmlNode/ApiCustomXmlNode.md)[]

## Example

Find and collect matching child nodes within an XML structure in a spreadsheet.

```javascript editor-xlsx
// How do I search for specific nodes inside an XML tree in a spreadsheet?

// Gather a set of related XML nodes by their shared path in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml = xmlManager.Add("<library><book>Book 1</book><book>Book 2</book><book>Book 3</book></library>");
let libraryNode = xml.GetNodes('/library')[0];
let bookNodes = libraryNode.GetNodes('/book');
worksheet.GetRange("A1").SetValue("Number of books: " + bookNodes.length);
for (let i = 0; i < bookNodes.length; i++) {
    worksheet.GetRange("A" + (i + 2)).SetValue("Book" + ": " + bookNodes[i].GetText());
}
```
