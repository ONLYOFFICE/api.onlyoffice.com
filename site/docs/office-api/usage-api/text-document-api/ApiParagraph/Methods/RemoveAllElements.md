# RemoveAllElements

Removes all the elements from the current paragraph.
💡 When all the elements are removed from the paragraph, a new empty run is automatically created. If you want to add
content to this run, use the [ApiParagraph#GetElement](../../ApiParagraph/Methods/GetElement.md) method.

## Syntax

```javascript
expression.RemoveAllElements();
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Remove all the elements from the current paragraph in a document.

```javascript editor-docx
// How to delete the paragraph in a document.

// Delete all ellements from the paragraph in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is the first text run in the current paragraph.");
paragraph.AddElement(run);
paragraph.RemoveAllElements();
run = Api.CreateRun();
run.AddText("We removed all the paragraph elements and added a new text run inside it.");
paragraph.AddElement(run);
doc.Push(paragraph);
```
