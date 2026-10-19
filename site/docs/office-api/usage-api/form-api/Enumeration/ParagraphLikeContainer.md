# ParagraphLikeContainer

A paragraph-like container that can directly hold inline-level content (Hyperlink, InlineLvlSdt, etc.).

## Type

Enumeration

## Values

- [ApiFormBase](../ApiFormBase/ApiFormBase.md)

## Example

Get the paragraph-like container (a paragraph or an inline content control) that holds a hyperlink.

```javascript editor-forms
// The parent is a paragraph or an inline content control that directly holds the inline element.

// Retrieve the paragraph-like parent of a hyperlink.

let parent = hyperlink.GetParent();
```
