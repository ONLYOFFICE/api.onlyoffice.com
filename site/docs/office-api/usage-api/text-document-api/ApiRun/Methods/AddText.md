# AddText

Adds some text to the current run.

## Syntax

```javascript
expression.AddText(sText);
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | Required | string |  | The text which will be added to the current run. |

## Returns

boolean

## Example

This example adds some text to the run.

```javascript editor-docx
// How to add a sentence to the text run.

// Add text to the document. 

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. Nothing special.");
paragraph.AddElement(run);
```
