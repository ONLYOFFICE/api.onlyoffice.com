# SetVerticalTextAlign

Sets the vertical alignment to the shape content where a paragraph or text runs can be inserted.

## Syntax

```javascript
expression.SetVerticalTextAlign(verticalAlign);
```

`expression` - A variable that represents a [ApiShape](../ApiShape.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| verticalAlign | Required | [VerticalTextAlign](../../Enumeration/VerticalTextAlign.md) |  | The type of the vertical alignment for the shape inner contents. |

## Returns

boolean

## Example

How to set vertical alignment of the shape content.

```javascript editor-pdf
// Adjust vertical alignment of the text inside the shape.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartOnlineStorage", 200 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetContent();
shape.SetVerticalTextAlign("bottom");
const paragraph = Api.CreateParagraph();
paragraph.SetJc("left");
paragraph.AddText("We removed all elements from the shape and added a new paragraph inside it ");
paragraph.AddText("aligning it vertically by the bottom.");
docContent.Push(paragraph);
page.AddObject(shape);
```
