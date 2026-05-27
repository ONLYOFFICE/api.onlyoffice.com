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

Read the class type identifier of a document object in a document.

```javascript editor-docx
// How do I check what class type a document object belongs to in a document?

// Confirm the object kind before processing it by reading its class type in a document.

let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
let classType = doc.GetClassType();
paragraph = doc.GetElement(0);
paragraph.AddText("Class Type = " + classType);
```
