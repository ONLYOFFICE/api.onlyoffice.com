# AddElement

Adds an element to the inline text content control.

## Syntax

```javascript
expression.AddElement(oElement, nPos);
```

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oElement | Required | [ParagraphContent](../../Enumeration/ParagraphContent.md) |  | The document element which will be added at the position specified. Returns **false** if the type of *oElement* is not supported by an inline text content control. |
| nPos | Optional | number |  | The position of the element where it will be added to the current inline text content control. If this value is not specified, then the element will be added to the end of the current inline text content control. |

## Returns

boolean

## Example

Insert a text run into an inline content control at a specific position in a document.

```javascript editor-docx
// How do I add a run element to an inline content control in a document?

// Populate an inline content control by placing a run at a chosen index in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let run = Api.CreateRun();
run.AddText("This is an inline text content control with a text run in it.");
inlineLvlSdt.AddElement(run, 0);
```
