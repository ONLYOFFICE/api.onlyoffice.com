# GetBackgroundColor

Returns the background color of the current content control.

## Syntax

```javascript
expression.GetBackgroundColor();
```

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

null \| Object

## Example

This example shows how to get the border color for the container.

```javascript editor-docx playground
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
let run = Api.CreateRun();
inlineLvlSdt.SetBackgroundColor(0, 0, 255, 40);
let color = inlineLvlSdt.GetBackgroundColor();

function colorToText(color){
    if (!color)
        return "none";

    return "rgba(" + color.r + ", " + color.g + ", " + color.b + ", " + color.a + ")";
}

run.AddText("BackgroundColor: " + colorToText(color));
inlineLvlSdt.AddElement(run, 0);
paragraph.AddInlineLvlSdt(inlineLvlSdt);

inlineLvlSdt = Api.CreateInlineLvlSdt();
run = Api.CreateRun();
color = inlineLvlSdt.GetBackgroundColor();
run.AddText("BackgroundColor: " + colorToText(color));
inlineLvlSdt.AddElement(run, 0);
paragraph.AddInlineLvlSdt(inlineLvlSdt);

```
