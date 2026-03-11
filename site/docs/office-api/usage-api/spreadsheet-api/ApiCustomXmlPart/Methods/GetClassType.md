# GetClassType

Returns a type of the ApiCustomXmlPart class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiCustomXmlPart](../ApiCustomXmlPart.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"customXmlPart"

## Example

This example shows how to get the class type of a custom XML part.

```javascript editor-xlsx
// How to get the class type of an XML part.

// Get the class type.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml = xmlManager.Add("<data><value>Sample</value></data>");
let classType = xml.GetClassType();
worksheet.GetRange("A1").SetValue("Class type: " + classType);
```
