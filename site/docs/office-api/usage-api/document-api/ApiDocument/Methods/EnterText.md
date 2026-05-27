# EnterText

Add text to the document on the cursor position.

## Syntax

```javascript
expression.EnterText(sText);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | Required | string |  | The text to add to document. |

## Returns

boolean

## Example

Insert text at the current cursor position in a document.

```javascript editor-docx
// How do I type text at the cursor without selecting a paragraph element in a document?

// Programmatically simulate typing so content appears exactly where the cursor is placed in a document.

let doc = Api.GetDocument();
doc.EnterText("This is the text in your document.");
```
