# SetBackgroundColor

Sets the background color to the current content control.

## Syntax

```javascript
expression.SetBackgroundColor(color);
```

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | Optional | [ApiColor](../../ApiColor/ApiColor.md) |  | No description provided. |

## Returns

boolean

## Example

This example shows how to set the background color for the container.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
let run = Api.CreateRun();
run.AddText("This is an inline text content control with a transparent blue background.");
inlineLvlSdt.AddElement(run, 0);
inlineLvlSdt.SetBackgroundColor(0, 0, 255, 40);
paragraph.AddInlineLvlSdt(inlineLvlSdt);

```
