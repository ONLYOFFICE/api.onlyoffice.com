# Copy

Copies the current group of drawings.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.Copy();
```

`expression` - A variable that represents a [ApiGroup](../ApiGroup.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiGroup](../../ApiGroup/ApiGroup.md)

## Example

Duplicate a group of drawings and add the copy to the same paragraph in a document.

```javascript editor-docx
// How do I make a copy of a grouped set of objects in a document?

// Clone a group of shapes so that the duplicate appears alongside the original in a document.

let doc = Api.GetDocument();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape1 = Api.CreateShape("rect", 60 * 36000, 60 * 36000, fill, stroke);
let shape2 = Api.CreateShape("ellipse", 60 * 36000, 60 * 36000, fill, stroke);
shape1.SetWrappingStyle("inFront");
shape2.SetWrappingStyle("inFront");
let group = Api.CreateGroup([shape1, shape2]);
let paragraph = doc.GetElement(0);
paragraph.AddDrawing(group);

let copyGroup = group.Copy();
paragraph.AddDrawing(copyGroup);
```
