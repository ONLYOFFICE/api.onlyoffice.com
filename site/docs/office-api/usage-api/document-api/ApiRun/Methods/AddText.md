# AddText

Adds some text to the current run.

## Syntax

```javascript
expression.AddText(text);
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | Required | string |  | The text which will be added to the current run. |

## Returns

boolean

## Example

Place a string of text into a run and add it to a paragraph in a document.

```javascript editor-docx
// How do I write a sentence into a text run and display it in a document?

// Build a paragraph by filling a text run with content in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. Nothing special.");
paragraph.AddElement(run);
```
