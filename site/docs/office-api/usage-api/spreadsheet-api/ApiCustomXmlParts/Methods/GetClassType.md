# GetClassType

Returns a type of the ApiCustomXmlParts class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiCustomXmlParts](../ApiCustomXmlParts.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"customXmlParts"

## Example

This example shows how to get the class type of the custom XML parts manager.

```javascript editor-xlsx
// How to get the class type of the XML parts manager.

// Get the class type.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let classType = xmlManager.GetClassType();
worksheet.GetRange("A1").SetValue("XML manager class type: " + classType);
```
