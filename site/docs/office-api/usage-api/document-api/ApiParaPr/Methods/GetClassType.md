# GetClassType

Returns a type of the ApiParaPr class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiParaPr](../ApiParaPr.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"paraPr"

## Example

Identify the class type of a paragraph properties object in a document.

```javascript editor-docx
// How do I confirm what kind of object holds paragraph formatting in a document?

// Verify the object type when working with style-level formatting to avoid errors at runtime.

let doc = Api.GetDocument();
let myStyle = doc.CreateStyle("My document style");
let paraPr = myStyle.GetParaPr();
paraPr.SetLeftBorder("single", 24, 0, 255, 111, 61);
let paragraph = doc.GetElement(0);
paragraph.SetStyle(myStyle);
paragraph.AddText("This is the first paragraph. ");
paragraph.AddText("The paragraph properties styled above set a border at its left side.");
let classType = paraPr.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class Type = " + classType);
doc.Push(paragraph);
```
