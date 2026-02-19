# SetColor

Sets the text color for the current text run.

## Syntax

```javascript
expression.SetColor(color);
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | Required | [ApiColor](../../ApiColor/ApiColor.md) |  | No description provided. |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example sets the text color for the current text run.

```javascript editor-docx
// How to change text color.

// Create a new text run and change its font color.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);

const firstRun = Api.CreateRun();
firstRun.AddText('This is a text run with the font color set to orange.');
firstRun.SetColor(255, 111, 61);
paragraph.AddElement(firstRun);

const secondRun = Api.CreateRun();
secondRun.AddText('The text uses a bluish color created with HexColor method.');
const hexColor = Api.HexColor('#219ebc');
secondRun.SetColor(hexColor);
paragraph.AddElement(secondRun);

```
