# GetParent

Returns the parent element (a paragraph or an inline content control) that directly contains the current form.

## Syntax

```javascript
expression.GetParent();
```

`expression` - A variable that represents an [ApiFormBase](../ApiFormBase.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ParagraphLikeContainer](../../Enumeration/ParagraphLikeContainer.md) \| null \| undefined

## Example

Access the element that directly contains a form.

```javascript editor-forms
// The parent is the paragraph that directly contains the form.

// Navigate from a text form up to its parent paragraph and make it bold.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let form = Api.CreateTextForm({ "key": "Name", "placeholder": "Enter text" });
paragraph.Push(form);
let parent = form.GetParent();
parent.SetBold(true);
```
