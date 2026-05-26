# AddText

Adds text to the current content control.

## Syntax

```javascript
expression.AddText(text);
```

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | Required | String |  | The text which will be added to the content control. |

## Returns

boolean

## Example

Add text to an inline content control in a document.

```javascript editor-docx
// How do I insert text into an inline text content control in a document?

// Fill an inline content control with a plain-text string in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
inlineLvlSdt.AddText("This is an inline text content control.");
paragraph.AddInlineLvlSdt(inlineLvlSdt);
```
