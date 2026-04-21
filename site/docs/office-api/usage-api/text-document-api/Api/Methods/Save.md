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

Save changes to the specified document.

```javascript editor-docx
// Add a text to the first paragraph of the document and save these changes.

// How to save changes made to the paragraph object in a document.

let paragraph = Api.GetDocument().GetElement(0);
paragraph.AddText("This sample text is saved to the document.");
Api.Save();
```
