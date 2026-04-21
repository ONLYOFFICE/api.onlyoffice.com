# GetClassType

Returns a type of the ApiInlineLvlSdt class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"inlineLvlSdt"

## Example

Find out the class type of an inline content control object in a document.

```javascript editor-docx
// How can I get the class type of an inline content control in a document?

// Get the class type of an inline content control and display it in the document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let run = Api.CreateRun();
run.AddText("This is an inline text content control.");
inlineLvlSdt.AddElement(run, 0);
let classType = inlineLvlSdt.GetClassType();
paragraph.AddLineBreak();
paragraph.AddText("Class Type = " + classType);
```
