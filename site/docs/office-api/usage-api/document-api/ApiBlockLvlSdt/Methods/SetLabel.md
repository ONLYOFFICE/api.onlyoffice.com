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
| label | Required | number |  | The label which will be added to the current container. Can be a positive or negative integer from **-2147483647** to **2147483647**. |

## Returns

boolean

## Example

Assign a numeric label to a content control in a document.

```javascript editor-docx
// How do I attach a label value to a content control in a document?

// Mark a content control with a label and confirm the value in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control with a label set to it.");
blockLvlSdt.SetLabel(2147483647);
doc.AddElement(0, blockLvlSdt);
let label = blockLvlSdt.GetLabel();
let paragraph = doc.GetElement(1);
paragraph.AddText("Label: " + label);
```
