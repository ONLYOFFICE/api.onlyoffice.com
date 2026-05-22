# SetColor

Sets the text color to the current text Range.

## Syntax

```javascript
expression.SetColor(color);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | Required | [ApiColor](../../ApiColor/ApiColor.md) |  | The text color. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md) \| null

## Example

Change the color of a range of text in a document.

```javascript editor-docx
// How do I apply a specific color to a portion of text in a document?

// Give selected words a distinct color to draw attention to them in a document.

const doc = Api.GetDocument();
const firstParagraph = doc.GetElement(0);
firstParagraph.AddText('ONLYOFFICE Document Builder');

const companyRange = doc.GetRange(1, 11);
companyRange.SetColor(Api.HexColor('#FF6F3D'));

const productRange = doc.GetRange(12, 30);
const themeColor = Api.ThemeColor('accent1');
productRange.SetColor(themeColor);
```
