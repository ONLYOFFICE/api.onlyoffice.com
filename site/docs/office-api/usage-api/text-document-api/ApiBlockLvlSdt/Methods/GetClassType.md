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

Check the class type returned by a block-level content control in a document.

```javascript editor-docx
// How do I check what type a block-level content control object is in a document?

// Retrieve and output the class type string for a block-level content control in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
let paragraph = Api.CreateParagraph();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
doc.AddElement(0, blockLvlSdt);
paragraph = doc.GetElement(1);
paragraph.AddText("Class type: " + blockLvlSdt.GetClassType());
```
