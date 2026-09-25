# GetVisitor

Returns a visitor object for traversing the text of the current drawing, including the drawings nested in a group.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.GetVisitor();
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiPresentationVisitor](../../ApiPresentationVisitor/ApiPresentationVisitor.md)

## Example

Read the text of every shape inside a group with a drawing visitor.

```javascript editor-pptx
// How do I get the text of grouped shapes in a presentation without ungrouping them?

// Group two shapes with text and collect the text of the group's children.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const first = Api.CreateShape("rect", 120 * 36000, 60 * 36000, fill, stroke);
first.SetPosition(608400, 1267200);
first.GetDocContent().GetElement(0).AddText("Left");
const second = Api.CreateShape("rect", 120 * 36000, 60 * 36000, fill, stroke);
second.SetPosition(6000000, 1267200);
second.GetDocContent().GetElement(0).AddText("Right");
const group = Api.CreateGroup([first, second]);
slide.AddObject(group);

const found = [];
const visitor = group.GetVisitor();
visitor.Text = function (text) {
	found.push(text);
	return false;
};
visitor.Traverse();

const result = Api.CreateShape("rect", 300 * 36000, 60 * 36000, fill, stroke);
result.SetPosition(608400, 3600000);
result.GetDocContent().GetElement(0).AddText("Grouped text: " + found.join(", "));
slide.AddObject(result);
```
