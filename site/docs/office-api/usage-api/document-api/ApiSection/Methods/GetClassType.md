# GetClassType

Returns a type of the ApiSection class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiSection](../ApiSection.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"section"

## Example

Retrieve the class type of a section in a document.

```javascript editor-docx
// How to identify the class type of a section in a document?

// Obtain the class type identifier of a section object in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let section = doc.GetFinalSection();
section.SetPageMargins(720, 720, 720, 720);
section.SetPageSize(7200, 4320);
let classType = section.GetClassType();
paragraph.AddText("Class Type = " + classType);
```
