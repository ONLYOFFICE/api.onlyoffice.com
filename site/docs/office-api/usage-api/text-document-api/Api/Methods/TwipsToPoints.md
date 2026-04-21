# TwipsToPoints

Converts twips to points.

## Syntax

```javascript
expression.TwipsToPoints(twips);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| twips | Required | number |  | The number of twips to convert to points. |

## Returns

number

## Example

Convert twips to points in a document.

```javascript editor-docx
// How can I convert twips to points in a document?

// Convert twips to points in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const twips = 100;
const points = Api.TwipsToPoints(twips);
paragraph.AddText(twips + ' twips are equal to ' + points + ' points.');
doc.Push(paragraph);
```
