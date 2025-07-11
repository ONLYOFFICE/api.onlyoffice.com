# AddText

Adds text to the current content control.

## Syntax

```javascript
expression.AddText(sText);
```

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | Required | String |  | The text which will be added to the content control. |

## Returns

boolean

## Example

This example adds a text to the content control.

```javascript editor-docx
// How to add text run to the inline text element.

// Add text to the inline control indicating the starting index.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
inlineLvlSdt.AddText("This is an inline text content control.");
paragraph.AddInlineLvlSdt(inlineLvlSdt);
```
