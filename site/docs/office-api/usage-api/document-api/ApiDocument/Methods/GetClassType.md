# GetClassType

Returns a type of the ApiDocument class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"document"

## Example

Find out the class type of a document object.

```javascript editor-docx
// How can I get the class type of a document?

// Get the class type of a document and display it in the document.

let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
let classType = doc.GetClassType();
paragraph = doc.GetElement(0);
paragraph.AddText("Class Type = " + classType);
```
