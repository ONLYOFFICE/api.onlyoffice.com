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

Read the type label assigned to a section in a document.

```javascript editor-docx
// How do I find out what kind of object a section is in a document?

// Confirm the category of a section by checking its type identifier in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let section = doc.GetFinalSection();
section.SetPageMargins(720, 720, 720, 720);
section.SetPageSize(7200, 4320);
let classType = section.GetClassType();
paragraph.AddText("Class Type = " + classType);
```
