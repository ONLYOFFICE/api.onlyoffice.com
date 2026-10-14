# GetPosInParent

Returns the position (index) of the current math element within its parent element.

## Syntax

```javascript
expression.GetPosInParent();
```

`expression` - A variable that represents an [ApiMath](../ApiMath.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

Number

## Example

Determine the index of a math equation within its parent element.

```javascript editor-docx
// The position is the math equation's index within its parent paragraph.

// Read a math equation's position within its paragraph and report it back.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Equation: ");
let math = Api.CreateMath("a^2 + b^2 = c^2");
paragraph.AddElement(math);
let position = math.GetPosInParent();
let report = Api.CreateParagraph();
report.AddText("The math equation is at position " + position + ".");
doc.Push(report);
```
