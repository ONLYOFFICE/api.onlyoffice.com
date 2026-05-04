# GetClassType

Returns a type of the ApiRange class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"range"

## Example

Check the class type returned by a range.

```javascript editor-docx
// How do I check what type a range object is?

// Retrieve and output the class type string for a range.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = paragraph.GetRange(0, 9);
let classType = range.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + classType);
doc.Push(paragraph);
```
