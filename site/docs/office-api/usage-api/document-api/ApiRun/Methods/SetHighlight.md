# SetHighlight

Specifies a highlighting color which is applied as a background to the contents of the current run.

## Syntax

```javascript
expression.SetHighlight(sColor);
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sColor | Required | [highlightColor](../../Enumeration/highlightColor.md) |  | Available highlight color. |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

Apply a background highlight color to a text run in a document.

```javascript editor-docx
// How do I add a colored highlight behind specific words in a document?

// Visually mark a portion of text with a background color in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.SetHighlight("lightGray");
run.AddText("This is a text run with the text highlighted with light gray color.");
paragraph.AddElement(run);
```
