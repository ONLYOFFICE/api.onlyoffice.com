# InchesToPoints

Converts inches to points.

## Syntax

```javascript
expression.InchesToPoints(inches);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| inches | Required | number |  | The number of inches to convert to points. |

## Returns

number

## Example

Convert inches to points in a document.

```javascript editor-docx
// How can I convert inches to points in a document?

// Convert inches to points in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const inches = 100;
const points = Api.InchesToPoints(inches);
paragraph.AddText(inches + ' inches are equal to ' + points + ' points.');
doc.Push(paragraph);
```
