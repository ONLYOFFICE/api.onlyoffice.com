# ScaleWidth

Scales the width of the figure using the specified coefficient.

## Syntax

```javascript
expression.ScaleWidth(coefficient);
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| coefficient | Required | number |  | The coefficient by which the figure width will be scaled. |

## Returns

boolean

## Example

Scales the width of the figure using the specified coefficient in a document.

```javascript editor-docx
// How to increase the width of the drawing in a document.

// Scale width for a drawing object in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
for (let i = 1; i < 4; i++ ){
	let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
	let stroke = Api.CreateStroke(0, Api.CreateNoFill());
	let drawing = Api.CreateShape("cube", 963295, 963295, fill, stroke);
	paragraph.AddDrawing(drawing);
	drawing.ScaleWidth( i );
}
```
