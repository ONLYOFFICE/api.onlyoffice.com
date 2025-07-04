# Copy

Creates a copy of the current run.

## Syntax

```javascript
expression.Copy();
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiRun](../../ApiRun/ApiRun.md)

## Example

This example creates a copy of the run.

```javascript editor-docx
// How to create a duplicate of the text.

// Create a copy of the run and insert it to the paragraph. 

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run1 = Api.CreateRun();
run1.AddText("This is just a sample text that was copied. ");
paragraph.AddElement(run1);
let run2 = run1.Copy();
paragraph.AddElement(run2);
```
