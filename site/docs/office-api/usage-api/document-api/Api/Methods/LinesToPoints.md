# LinesToPoints

Converts lines to points (1 line = 12 points).

## Syntax

```javascript
expression.LinesToPoints(lines);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| lines | Required | number |  | The number of lines to convert to points. |

## Returns

number

## Example

Convert a measurement from lines to points in a document.

```javascript editor-docx
// How do I convert lines to points in a document?

// Display the equivalent point value for a given number of lines in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const lines = 100;
const points = Api.LinesToPoints(lines);
paragraph.AddText(lines + ' lines are equal to ' + points + ' points.');
doc.Push(paragraph);
```
