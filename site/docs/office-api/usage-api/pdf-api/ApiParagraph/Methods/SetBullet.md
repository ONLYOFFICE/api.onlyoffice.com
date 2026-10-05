# SetBullet

Sets the bullet or numbering to the current paragraph.

Inherited from [ApiParaPr.SetBullet](../../ApiParaPr/Methods/SetBullet.md).

## Syntax

```javascript
expression.SetBullet(oBullet);
```

`expression` - A variable that represents an [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oBullet | Required | [ApiBullet](../../ApiBullet/ApiBullet.md) |  | The bullet object created with the [Api#CreateBullet](../../Api/Methods/CreateBullet.md) or [Api#CreateNumbering](../../Api/Methods/CreateNumbering.md) method. |

## Returns

This method doesn't return any data.

## Example

Add a bullet point to a paragraph in a PDF.

```javascript editor-pdf
// How do I mark a paragraph with a bullet symbol in a PDF?

// Assign a bullet character to a paragraph in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
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
