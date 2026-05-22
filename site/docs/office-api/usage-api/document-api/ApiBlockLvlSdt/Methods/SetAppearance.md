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

Change the visual appearance of a content control in a document.

```javascript editor-docx
// How do I hide the border and frame of a content control in a document?

// Make a content control invisible to users while keeping its content visible in a document.

let doc = Api.GetDocument();
let contentControl = Api.CreateBlockLvlSdt();
contentControl.SetAppearance("hidden");
contentControl.GetContent().GetElement(0).AddText("This is a content control with a hidden appearance");
doc.Push(contentControl);
```
