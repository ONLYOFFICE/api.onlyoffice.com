# GetXPath

Returns the absolute XPath of the current XML node.

## Syntax

```javascript
expression.GetXPath();
```

`expression` - A variable that represents a [ApiCustomXmlNode](../ApiCustomXmlNode.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Determine the full path address of an XML node within a document in a spreadsheet.

```javascript editor-xlsx
// How do I find out where an XML node sits in the overall structure in a spreadsheet?

// Identify the exact location of a node by reading its path expression in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml = xmlManager.Add("<company><department><employee>John</employee></department></company>");
let employeeNode = xml.GetNodes('/company/department/employee')[0];
let xpath = employeeNode.GetXPath();
worksheet.GetRange("A1").SetValue("XPath of employee node: " + xpath);
```
