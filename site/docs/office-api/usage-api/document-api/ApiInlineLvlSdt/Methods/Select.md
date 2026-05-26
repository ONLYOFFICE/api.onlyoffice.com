# Select

Selects the current content control.

## Syntax

```javascript
expression.Select();
```

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Select an inline content control to bring it into focus in a document.

```javascript editor-docx
// How do I programmatically select an inline content control in a document?

// Highlight a content control so the cursor lands on it when navigating in a document.

let doc = Api.GetDocument();
let checkbox = doc.AddCheckBoxContentControl();
checkbox.Select();
```
