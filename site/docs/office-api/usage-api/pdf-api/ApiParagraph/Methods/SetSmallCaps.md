# SetSmallCaps

Specifies that all the small letter characters in this paragraph are formatted for display only as their capital
letter character equivalents which are two points smaller than the actual font size specified for this text.

## Syntax

```javascript
expression.SetSmallCaps(isSmallCaps);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isSmallCaps | Required | boolean |  | Specifies if the contents of the current paragraph are displayed capitalized two points smaller or not. |

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## Example

This example applies small caps formatting to paragraph text.

```javascript editor-pdf
const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));
const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText('This is a paragraph with the font set to small capitalized letters.');
paragraph.SetSmallCaps(true);
page.AddObject(shape);

```
