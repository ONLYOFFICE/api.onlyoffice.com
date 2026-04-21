# PicasToPoints

Converts picas to points.

## Syntax

```javascript
expression.PicasToPoints(pc);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| pc | Required | number |  | The number of picas to convert to points. |

## Returns

number

## Example

Convert picas to points in a document.

```javascript editor-docx
// How do I convert picas to points in a document?

// Convert picas to points and display the result in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const picas = 100;
const points = Api.PicasToPoints(picas);
paragraph.AddText(picas + ' picas are equal to ' + points + ' points.');
doc.Push(paragraph);
```
