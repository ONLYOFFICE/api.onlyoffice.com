# SetSmallCaps

Specifies that all the lowercase letter characters in the current text Range are formatted for display only as their capital letter character equivalents which are two points smaller than the actual font size specified for this text.

## Syntax

```javascript
expression.SetSmallCaps(isSmallCaps);
```

`expression` - A variable that represents an [ApiTextRange](../ApiTextRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isSmallCaps | Required | boolean \| null |  | Specifies if the contents of the current Range are displayed capitalized two points smaller or not. Pass *null* to remove the small capitals. |

## Returns

[ApiTextRange](../../ApiTextRange/ApiTextRange.md)

## Example

Display the text of a range in small capitals in a shape on a PDF page.

```javascript editor-pdf
// The formatting applies to the covered fragment only.

// Show the first word in small capitals.

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

range.GetRange(0, 5).SetSmallCaps(true);
```
