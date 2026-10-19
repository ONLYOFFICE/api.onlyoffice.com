# SetUnderline

Specifies that the contents of the current Range are displayed along with a line appearing directly below the character (less than all the spacing above and below the characters on the line).

## Syntax

```javascript
expression.SetUnderline(isUnderline);
```

`expression` - A variable that represents an [ApiTextRange](../ApiTextRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isUnderline | Required | boolean \| null |  | Specifies if the contents of the current Range are displayed underlined or not. Pass *null* to remove the underline. |

## Returns

[ApiTextRange](../../ApiTextRange/ApiTextRange.md)

## Example

Underline the text of a range in a shape on a PDF page.

```javascript editor-pdf
// The formatting applies to the covered fragment only.

// Underline the first word.

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

range.GetRange(0, 5).SetUnderline(true);
```
