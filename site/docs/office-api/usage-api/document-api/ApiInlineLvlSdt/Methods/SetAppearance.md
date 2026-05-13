# SetAppearance

Sets the visualization type of the content control.

## Syntax

```javascript
expression.SetAppearance(type);
```

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | Required | "boundingBox" \| "hidden" |  | The desired visualization type. |

## Returns

This method doesn't return any data.

## Example

Add a content control and change its appearance in a document.

```javascript editor-docx
// How can I set appearance using an inline content control in a document?

// Set appearance for an inline content control in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let contentControl = Api.CreateInlineLvlSdt();
contentControl.SetAppearance("hidden");
contentControl.AddText("This is a content control with a hidden appearance");
paragraph.Push(contentControl);
```
