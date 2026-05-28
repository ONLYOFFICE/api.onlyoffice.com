# GetClassType

Returns a type of the ApiBlockLvlSdt class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"blockLvlSdt"

## Example

Read the object type of a content control and display it in a document.

```javascript editor-docx
// How do I find out what type of object a content control is in a document?

// Identify a content control by its type label and write the result as text in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
let paragraph = Api.CreateParagraph();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
doc.AddElement(0, blockLvlSdt);
paragraph = doc.GetElement(1);
paragraph.AddText("Class type: " + blockLvlSdt.GetClassType());
```
