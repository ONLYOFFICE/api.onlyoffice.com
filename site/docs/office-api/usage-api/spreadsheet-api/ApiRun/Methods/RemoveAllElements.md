# RemoveAllElements

Removes all the elements from the current run.

## Syntax

```javascript
expression.RemoveAllElements();
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example removes all the elements from the run.

```javascript editor-xlsx
// How to remove all text elements.

// Create a text run object, add a text to it and clear its content.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text.");
run.RemoveAllElements();
run.AddText("All elements from this run were removed before adding this text.");
paragraph.AddElement(run);
```
