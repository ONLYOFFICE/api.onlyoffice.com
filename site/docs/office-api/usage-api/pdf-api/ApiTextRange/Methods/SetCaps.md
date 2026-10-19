# SetCaps

Specifies that any lowercase characters in the current text Range are formatted for display only as their capital letter character equivalents.

## Syntax

```javascript
expression.SetCaps(isCaps);
```

`expression` - A variable that represents an [ApiTextRange](../ApiTextRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isCaps | Required | boolean \| null |  | Specifies if the Range contents are displayed capitalized or not. Pass *null* to remove the capitalization. |

## Returns

[ApiTextRange](../../ApiTextRange/ApiTextRange.md)

## Example

Display the text of a range in capitals in a shape on a PDF page.

```javascript editor-pdf
// The formatting applies to the covered fragment only.

// Show the first word in capitals.

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

range.GetRange(0, 5).SetCaps(true);
```
