# CreateBullet

Creates a bullet for a paragraph with the character or symbol specified with the sSymbol parameter.

## Syntax

```javascript
expression.CreateBullet(sSymbol);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sSymbol | Required | string |  | The character or symbol which will be used to create the bullet for the paragraph. |

## Returns

[ApiBullet](../../ApiBullet/ApiBullet.md)

## Example

Add a bullet point to a paragraph in a PDF.

```javascript editor-pdf
// How do I create a bulleted list in a PDF?

// Format a paragraph with a bullet character in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
const bullet = Api.CreateBullet("-");
paragraph.SetBullet(bullet);
paragraph.AddText(" This is an example of the bulleted paragraph.");
page.AddObject(shape);
```
