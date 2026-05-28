# SetAlias

Sets the alias attribute to the current container.

## Syntax

```javascript
expression.SetAlias(sAlias);
```

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sAlias | Required | string |  | The alias which will be added to the current inline text content control. |

## Returns

boolean

## Example

Assign a human-readable alias to an inline content control in a document.

```javascript editor-docx
// How do I label an inline content control with an alias in a document?

// Give a content control a friendly name so it can be identified easily by alias in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
let run = Api.CreateRun();
run.AddText("This is an inline text content control with alias '№1'.");
inlineLvlSdt.AddElement(run, 0);
inlineLvlSdt.SetAlias("№1");
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let alias = inlineLvlSdt.GetAlias();
paragraph = Api.CreateParagraph();
paragraph.AddText("Alias: " + alias);
doc.Push(paragraph);
```
