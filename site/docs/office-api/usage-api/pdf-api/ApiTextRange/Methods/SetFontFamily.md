# SetFontFamily

Sets the font family for the current TextRange.

## Syntax

```javascript
expression.SetFontFamily(fontFamily);
```

`expression` - A variable that represents an [ApiTextRange](../ApiTextRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| fontFamily | Optional | string \| null |  | The font family or families used for the current text Range. Pass *null* or omit it to remove the font family. |

## Returns

[ApiTextRange](../../ApiTextRange/ApiTextRange.md) \| null

## Example

Change the font of a range in a shape on a PDF page.

```javascript editor-pdf
// The font applies to the covered fragment only.

// Set a monospaced font on the first word.

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

range.GetRange(0, 5).SetFontFamily("Courier New");
```
