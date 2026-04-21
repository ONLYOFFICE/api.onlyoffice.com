# RemoveAllElements

Removes all the elements from the current inline text content control.

## Syntax

```javascript
expression.RemoveAllElements();
```

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Clear the contents from the content control in a document.

```javascript editor-docx
// How to remove all elements from the inline text control in a document.

// Delete text from the inline content control in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
paragraph.AddInlineLvlSdt(inlineLvlSdt);
inlineLvlSdt.AddText("This is an inline text content control.");
inlineLvlSdt.RemoveAllElements();
inlineLvlSdt.AddText("We removed all the inline content control elements.");
```
