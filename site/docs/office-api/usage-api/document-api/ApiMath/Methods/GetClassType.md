# GetClassType

Returns a type of the ApiMath class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents an [ApiMath](../ApiMath.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"math"

## Example

Identify the object type of a math equation in a document.

```javascript editor-docx
// Find out what kind of object a formula is in a document.

// Confirm the category a math equation belongs to in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let math = Api.CreateMath("x^2 + y^2 = z^2", "unicode");
paragraph.AddElement(math);
let classType = math.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class Type = " + classType);
doc.Push(paragraph);
```
