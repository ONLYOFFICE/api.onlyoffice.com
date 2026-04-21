# GetTag

Returns the tag attribute for the current container.

## Syntax

```javascript
expression.GetTag();
```

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Get the tag attribute for the container in a document.

```javascript editor-docx
// How to get tag of the inline text control in a document.

// Display the tag of the inline content control in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
let run = Api.CreateRun();
run.AddText("This is an inline text content control with a tag set to it.");
inlineLvlSdt.AddElement(run, 0);
inlineLvlSdt.SetTag("This is a tag");
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let tag = inlineLvlSdt.GetTag();
paragraph = Api.CreateParagraph();
paragraph.AddText("Tag: " + tag);
doc.Push(paragraph);
```
