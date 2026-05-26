# GetClassType

Returns a type of the ApiParagraph class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"paragraph"

## Example

Identify the class type of a paragraph object in a document.

```javascript editor-docx
// How do I determine what type of object a paragraph is in a document?

// Confirm an object is a paragraph before applying paragraph-specific operations in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let classType = paragraph.GetClassType();
paragraph.AddText("Class Type = " + classType);
```
