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

This example show how to create a bullet.

```javascript editor-pdf
// How to add a bullet to the paragraph.

// Add bulleted paragraph.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
const bullet = Api.CreateBullet("-");
paragraph.SetBullet(bullet);
paragraph.AddText(" This is an example of the bulleted paragraph.");
page.AddObject(shape);

```
