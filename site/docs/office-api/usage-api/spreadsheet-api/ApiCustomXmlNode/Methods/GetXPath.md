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

This example shows how to get the XPath of a custom XML node.

```javascript editor-xlsx playground
// How to retrieve XPath location from custom XML node elements.

// Get XPath from employee node.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml = xmlManager.Add("<company><department><employee>John</employee></department></company>");
let employeeNode = xml.GetNodes('/company/department/employee')[0];
let xpath = employeeNode.GetXPath();
worksheet.GetRange("A1").SetValue("XPath of employee node: " + xpath);
```
