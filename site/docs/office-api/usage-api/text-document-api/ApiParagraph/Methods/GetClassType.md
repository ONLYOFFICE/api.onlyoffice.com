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

Find out the class type of a paragraph object in a document.

```javascript editor-docx
// How can I get the class type of a paragraph in a document?

// Get the class type of a paragraph and display it in the document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let classType = paragraph.GetClassType();
paragraph.AddText("Class Type = " + classType);
```
