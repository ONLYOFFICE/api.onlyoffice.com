# RemoveAllElements

Removes all the elements from the current document or from the current document element.

:::note
When all elements are removed, a new empty paragraph is automatically created. If you want to add content to this paragraph, use the [ApiDocumentContent#GetElement](../../ApiDocumentContent/Methods/GetElement.md) method.
:::

Inherited from [ApiDocumentContent.RemoveAllElements](../../ApiDocumentContent/Methods/RemoveAllElements.md).

## Syntax

```javascript
expression.RemoveAllElements();
```

`expression` - A variable that represents an [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Remove all content elements from a document.

```javascript editor-docx
// How do I clear every element out of a document?

// Start fresh by wiping all existing content before adding new paragraphs in a document.

let doc = Api.GetDocument();
doc.RemoveAllElements();
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is the first paragraph. ");
paragraph.AddText("We removed all document elements (including the first paragraph, created by default). ");
paragraph.AddText("This paragraph now took its place.");
doc.AddElement(0, paragraph);
```
