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

Add a text to the content control in a document.

```javascript editor-docx
// How to add text run to the inline text element in a document.

// Add text to the inline control indicating the starting index in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
inlineLvlSdt.AddText("This is an inline text content control.");
paragraph.AddInlineLvlSdt(inlineLvlSdt);
```
