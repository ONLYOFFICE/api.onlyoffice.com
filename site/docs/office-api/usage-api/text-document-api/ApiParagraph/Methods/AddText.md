# AddText

Adds some text to the current paragraph.

## Syntax

```javascript
expression.AddText(text);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | Required | string |  | The text that we want to insert into the current document element. |

## Returns

[ApiRun](../../ApiRun/ApiRun.md)

## Example

Add some text to the paragraph in a document.

```javascript editor-docx
// How to insert the text to the paragraph in a document.

// Add the text and display the result in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text. Nothing special.");
```
