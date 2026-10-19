# GetParent

Returns the parent element (a paragraph or an inline content control) that directly contains the current math element.

## Syntax

```javascript
expression.GetParent();
```

`expression` - A variable that represents an [ApiMath](../ApiMath.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ParagraphLikeContainer](../../Enumeration/ParagraphLikeContainer.md) \| null \| undefined

## Example

Access the element that directly contains a math equation.

```javascript editor-docx
// The parent is the paragraph that directly contains the math equation.

// Navigate from a math equation up to its parent paragraph and make it italic.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Equation: ");
let math = Api.CreateMath("a^2 + b^2 = c^2");
paragraph.AddElement(math);
let parent = math.GetParent();
parent.SetItalic(true);
```
