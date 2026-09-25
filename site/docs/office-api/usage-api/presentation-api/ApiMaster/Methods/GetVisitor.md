# GetVisitor

Returns a visitor object for traversing the drawings and text of the current slide master and, on request, of its layouts.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.GetVisitor();
```

`expression` - A variable that represents a [ApiMaster](../ApiMaster.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiPresentationVisitor](../../ApiPresentationVisitor/ApiPresentationVisitor.md)

## Example

Make every text run of a slide master and its layouts bold with a master visitor.

```javascript editor-pptx
// How do I apply the same formatting to all text on a slide master and its layouts?

// Get the first master, add a shape with text to it and set bold for all its runs.

const presentation = Api.GetPresentation();
const master = presentation.GetMaster(0);

const fill = Api.CreateSolidFill(Api.RGB(80, 80, 80));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 60 * 36000, fill, stroke);
shape.SetPosition(608400, 6000000);
shape.GetDocContent().GetElement(0).AddText("Company confidential");
master.AddObject(shape);

const visitor = master.GetVisitor();
visitor.Run = function (run) {
	run.SetBold(true);
	return true;
};
visitor.Traverse({layouts: true});
```
