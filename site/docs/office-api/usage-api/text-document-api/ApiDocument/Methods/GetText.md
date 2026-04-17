# GetText

Returns the inner text of the current document content object.

Inherited from [ApiDocumentContent.GetText](../../ApiDocumentContent/Methods/GetText.md).

## Example

This example gets a text from document content element.

```javascript editor-docx
// Get the text of the document content as a string.

// Display all content. 

const doc = Api.GetDocument();

const blockLvlSdt = Api.CreateBlockLvlSdt();
doc.Push(blockLvlSdt);

const content = blockLvlSdt.GetContent();
content.GetElement(0).AddText("This is a block text content control.");

const para = Api.CreateParagraph();
para.AddText("This text from DocContent element: " + content.GetText());
doc.Push(para);
```

