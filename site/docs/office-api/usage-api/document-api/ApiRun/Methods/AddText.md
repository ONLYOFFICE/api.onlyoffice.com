# AddText

Adds some text to the current run.

## Syntax

```javascript
expression.AddText(text, widths);
```

`expression` - A variable that represents an [ApiRun](../ApiRun.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | Required | string \| number[] |  | The text which will be added to the current run. It can be a string or an array of Unicode code points. |
| widths | Optional | number[] |  | An array of character widths (in millimeters). It should be the same length as the array of code points passed in the "text" parameter. When the widths are specified, the characters are added preserving these exact widths. |

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
