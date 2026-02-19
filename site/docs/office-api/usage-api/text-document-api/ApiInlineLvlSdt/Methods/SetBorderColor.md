# SetBorderColor

Sets the border color to the current content control.

## Syntax

```javascript
expression.SetBorderColor(color);
```

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | Optional | [ApiColor](../../ApiColor/ApiColor.md) |  | No description provided. |

## Returns

boolean

## Example

This example shows how to set the border color for the container.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
let run = Api.CreateRun();
run.AddText("This is an inline text content control with blue border.");
inlineLvlSdt.AddElement(run, 0);
inlineLvlSdt.SetBorderColor(0, 0, 255, 255);
paragraph.AddInlineLvlSdt(inlineLvlSdt);

```
