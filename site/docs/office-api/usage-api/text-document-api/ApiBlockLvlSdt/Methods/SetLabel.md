# SetLabel

Sets the label attribute to the current container.

## Syntax

```javascript
expression.SetLabel(label);
```

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| label | Required | string |  | The label which will be added to the current container. Can be a positive or negative integer from -**-2147483647** to -**2147483647**. |

## Returns

boolean

## Example

This example sets a label attribute to the container.

```javascript editor-docx
// Creates a block content control and sets a label to it.

// How to set a label to the ApiBlockLvlSdt object.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control with a label set to it.");
blockLvlSdt.SetLabel("2147483647");
doc.AddElement(0, blockLvlSdt);
let label = blockLvlSdt.GetLabel();
let paragraph = doc.GetElement(1);
paragraph.AddText("Label: " + label);
```
