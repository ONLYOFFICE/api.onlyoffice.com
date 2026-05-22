# AddText

Appends the specified text to the end of the document content.

## Syntax

```javascript
expression.AddText(text);
```

`expression` - A variable that represents a [ApiDocumentContent](../ApiDocumentContent.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | Required | string |  | The text to add. |

## Returns

[ApiRun](../../ApiRun/ApiRun.md)

## Example

Append text to the end of a document content object in a document.

```javascript editor-docx
// How do I add text to the last paragraph of a document content object in a document?

// Add a sentence to the end of a content control without replacing existing text in a document.

const doc = Api.GetDocument();
const blockLvlSdt = Api.CreateBlockLvlSdt();
doc.Push(blockLvlSdt);

const content = blockLvlSdt.GetContent();
content.GetElement(0).AddText("First sentence.");
content.AddText(" Appended sentence.");
```
