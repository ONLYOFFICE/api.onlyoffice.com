# Save

Saves changes to the specified document.

## Syntax

```javascript
expression.Save();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example saves changes to the specified document.

```javascript editor-docx playground
// Adds a text to the first paragraph of the document and saves these changes.

// How to save changes made to the ApiParagraph object.

let paragraph = Api.GetDocument().GetElement(0);
paragraph.AddText("This sample text is saved to the document.");
Api.Save();
```
