# Delete

Deletes the XML from the custom XML manager.

## Syntax

```javascript
expression.Delete();
```

`expression` - A variable that represents a [ApiCustomXmlPart](../ApiCustomXmlPart.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Delete a custom XML part in a spreadsheet.

```javascript editor-xlsx
// How to delete a custom XML part from the workbook in a spreadsheet.

// Delete an XML part using the custom XML part API in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml1 = xmlManager.Add("<user xmlns='http://example'>John</user>");
let xml2 = xmlManager.Add("<customer xmlns='http://example'>Alex</customer>");
xml1.Delete();
let count = xmlManager.GetCount();
let xmlParts = xmlManager.GetAll();
worksheet.GetRange("A1").SetValue("Remaining XML parts: " + count);
xmlParts.forEach((part, index) => {
    worksheet.GetRange("A" + (index + 2)).SetValue("XML part: " + part.GetXml());
});
```
