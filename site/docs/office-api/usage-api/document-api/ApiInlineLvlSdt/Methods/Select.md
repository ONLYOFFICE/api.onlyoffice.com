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

Create an inline content control and select it in a document.

```javascript editor-docx
// How do I select in a document?

// Select using an inline content control object in a document.

let doc = Api.GetDocument();
let checkbox = doc.AddCheckBoxContentControl();
checkbox.Select();
```
