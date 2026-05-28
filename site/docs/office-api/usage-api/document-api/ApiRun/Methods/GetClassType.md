# GetClassType

Returns a type of the ApiRun class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"run"

## Example

Identify the object type of a text run in a document.

```javascript editor-docx
// How do I find out what kind of object a text run is in a document?

// Confirm the category a text run belongs to in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. Nothing special.");
paragraph.AddElement(run);
let classType = run.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class Type = " + classType);
doc.Push(paragraph);
```
