# SetText

Replaces all content of the current document content object with the specified text,
preserving the formatting of the first paragraph.

## Syntax

```javascript
expression.SetText(text);
```

`expression` - A variable that represents a [ApiDocumentContent](../ApiDocumentContent.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | Required | string |  | The text to set. |

## Returns

[ApiRun](../../ApiRun/ApiRun.md)

## Example

Replace all content in a document content object with plain text in a document.

```javascript editor-docx
// How do I overwrite everything inside a document content object in a document?

// Clear a content control and fill it with a single sentence, preserving the original formatting in a document.

const doc = Api.GetDocument();
const blockLvlSdt = Api.CreateBlockLvlSdt();
doc.Push(blockLvlSdt);

const content = blockLvlSdt.GetContent();
content.GetElement(0).AddText("Original text inside the content control.");
content.SetText("Replaced text inside the content control.");

const para = Api.CreateParagraph();
para.AddText("Content after SetText: " + content.GetText());
doc.Push(para);
```
