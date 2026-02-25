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

This example shows how to enter text at the current cursor position.

```javascript editor-docx playground
// How to add a line break at the cursor position.

// Enter text in a paragraph and add a line break.
let doc = Api.GetDocument();
doc.EnterText("This is the text in your document.");
```
