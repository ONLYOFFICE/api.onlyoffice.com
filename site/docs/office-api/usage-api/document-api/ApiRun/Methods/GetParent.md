# GetParent

Returns the parent element (a paragraph or an inline content control) that directly contains the current run.

## Syntax

```javascript
expression.GetParent();
```

`expression` - A variable that represents an [ApiRun](../ApiRun.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ParagraphLikeContainer](../../Enumeration/ParagraphLikeContainer.md) \| null \| undefined

## Example

Access the element that directly contains a text run.

```javascript editor-docx
// The parent is the paragraph that directly contains the text run.

// Navigate from a run to its parent and apply italic formatting through it.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("Example run");
paragraph.AddElement(run);
let parent = run.GetParent();
parent.SetItalic(true);
```
