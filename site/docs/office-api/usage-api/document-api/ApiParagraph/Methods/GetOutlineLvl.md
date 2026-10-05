# GetOutlineLvl

Returns the outline level of the specified properties.

Inherited from [ApiParaPr.GetOutlineLvl](../../ApiParaPr/Methods/GetOutlineLvl.md).

## Syntax

```javascript
expression.GetOutlineLvl();
```

`expression` - A variable that represents an [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

Number \| undefined

## Example

Read the outline level assigned to each paragraph in a document.

```javascript editor-docx
// How do I find out the outline level of a paragraph in a document?

// Create paragraphs at every outline level and display each level number in a document.

const doc = Api.GetDocument();
const firstParagraph = doc.GetElement(0);
firstParagraph.AddText('Outline level of this paragraph is ' + firstParagraph.GetOutlineLvl() + '.');

for (let levelIndex = 0; levelIndex < 9; levelIndex++) {
	const paragraph = Api.CreateParagraph();
	paragraph.SetOutlineLvl(levelIndex);

	const level = paragraph.GetOutlineLvl() + 1;
	paragraph.AddText('This is a paragraph with outline level ' + level + '.');
	doc.Push(paragraph);
}
```
