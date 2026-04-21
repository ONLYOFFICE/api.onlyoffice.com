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

Get the XPath of a custom XML node in a spreadsheet.

```javascript editor-xlsx
// How to retrieve XPath location from custom XML node elements in a spreadsheet.

// Get XPath from employee node in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml = xmlManager.Add("<company><department><employee>John</employee></department></company>");
let employeeNode = xml.GetNodes('/company/department/employee')[0];
let xpath = employeeNode.GetXPath();
worksheet.GetRange("A1").SetValue("XPath of employee node: " + xpath);
```
