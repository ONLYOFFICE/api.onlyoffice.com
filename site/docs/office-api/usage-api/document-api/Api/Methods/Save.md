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

Add text to a paragraph and save the changes in a document.

```javascript editor-docx
// How do I save changes after editing a paragraph in a document?

// Write text into the first paragraph and persist the result to the file in a document.

let paragraph = Api.GetDocument().GetElement(0);
paragraph.AddText("This sample text is saved to the document.");
Api.Save();
```
