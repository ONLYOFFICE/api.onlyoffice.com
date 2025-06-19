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

This example adds a content control and changes its appearance.

```javascript editor-docx
let doc = Api.GetDocument();
let contentControl = Api.CreateBlockLvlSdt();
contentControl.SetAppearance("hidden");
contentControl.GetContent().GetElement(0).AddText("This is a content control with a hidden appearance");
doc.Push(contentControl);
```
