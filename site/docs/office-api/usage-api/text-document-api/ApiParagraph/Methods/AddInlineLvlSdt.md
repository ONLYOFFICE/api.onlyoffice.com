# AddInlineLvlSdt

Adds an inline container.

## Syntax

```javascript
expression.AddInlineLvlSdt(oSdt);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oSdt | Required | [ApiInlineLvlSdt](../../ApiInlineLvlSdt/ApiInlineLvlSdt.md) |  | An inline container. If undefined or null, then new class ApiInlineLvlSdt will be created and added to the paragraph. |

## Returns

[ApiInlineLvlSdt](../../ApiInlineLvlSdt/ApiInlineLvlSdt.md)

## Example

This example adds an inline container to the paragraph.

```javascript editor-docx
// How to create an inline content control and add it to the paragraph.

// Add an inline text element to the paragraph.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
let run = Api.CreateRun();
run.AddText("This is an inline text content control.");
inlineLvlSdt.AddElement(run, 0);
paragraph.AddInlineLvlSdt(inlineLvlSdt);
```
