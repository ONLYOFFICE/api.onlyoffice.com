# SetText

Replaces the paragraph content with the specified text.

## Syntax

```javascript
expression.SetText(text);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | Required | string |  | The text to set. |

## Returns

[ApiRun](../../ApiRun/ApiRun.md)

## Example

Replace all text in a paragraph with a new string in a document.

```javascript editor-docx
// How do I overwrite the existing text of a paragraph in a document?

// Replace the original text with another text string.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is the original text.");
paragraph.SetText("This is the replacement text.");
```
