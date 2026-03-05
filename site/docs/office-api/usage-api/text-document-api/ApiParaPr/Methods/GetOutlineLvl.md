# GetOutlineLvl

Returns the outline level of the specified properties.

## Syntax

```javascript
expression.GetOutlineLvl();
```

`expression` - A variable that represents a [ApiParaPr](../ApiParaPr.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

Number

## Example

This example shows how to get the outline level of paragraphs with different levels.

```javascript editor-docx
const doc = Api.GetDocument();
const firstParagraph = doc.GetElement(0);
firstParagraph.AddText('To see outline levels, open "Headings" on the "View" tab.');

const levels = [1, 5, 8];
for (let i = 0; i < levels.length; i++) {
	const paragraph = Api.CreateParagraph();
	const paraPr = paragraph.GetParaPr();
	paraPr.SetOutlineLvl(levels[i]);
	paragraph.AddText('Outline level: ' + paraPr.GetOutlineLvl());
	doc.Push(paragraph);
}

```
