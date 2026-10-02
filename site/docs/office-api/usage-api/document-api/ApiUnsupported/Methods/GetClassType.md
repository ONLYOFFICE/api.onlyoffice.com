# GetClassType

Returns a type of the ApiUnsupported class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents an [ApiUnsupported](../ApiUnsupported.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"unsupported"

## Example

Read the type identifier of an unrecognized annotation object in a document.

```javascript editor-docx
// How do I find out what kind of unsupported element I have encountered in a document?

// Confirm the category of an unknown annotation by retrieving its type label in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This paragraph has a comment.");
paragraph.AddComment("comment", "John Smith");
let element = paragraph.GetElement(0);
let classType = element.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class Type = " + classType);
doc.Push(paragraph);
```
