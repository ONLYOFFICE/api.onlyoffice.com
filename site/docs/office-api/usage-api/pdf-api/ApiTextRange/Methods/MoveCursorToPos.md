# MoveCursorToPos

Moves a cursor to the specified position within the current range.

## Syntax

```javascript
expression.MoveCursorToPos(pos);
```

`expression` - A variable that represents an [ApiTextRange](../ApiTextRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| pos | Optional | number | 0 | The desired cursor position. |

## Returns

boolean

## Example

Move the cursor inside the text covered by a range in a shape on a PDF page.

```javascript editor-pdf
// Places the cursor precisely before further editing.

// Move the cursor between the two words.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 200 * 36000, 80 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
page.AddObject(shape);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("Hello World");

const range = shape.GetTextRange();

range.MoveCursorToPos(6);
```
