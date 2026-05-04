# SetAppearance

Sets the visualization of the content control.

## Syntax

```javascript
expression.SetAppearance(type);
```

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | Required | "boundingBox" \| "hidden" |  | The desired type of visualization. |

## Returns

This method doesn't return any data.

## Example

Add a content control and change its appearance in a document.

```javascript editor-docx
// How do I set appearance in a document?

// Set appearance using a block-level content control object in a document.

let doc = Api.GetDocument();
let contentControl = Api.CreateBlockLvlSdt();
contentControl.SetAppearance("hidden");
contentControl.GetContent().GetElement(0).AddText("This is a content control with a hidden appearance");
doc.Push(contentControl);
```
