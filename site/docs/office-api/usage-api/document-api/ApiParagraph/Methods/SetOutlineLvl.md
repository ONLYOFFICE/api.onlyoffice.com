# SetOutlineLvl

Sets the outline level for the specified properties.

Inherited from [ApiParaPr.SetOutlineLvl](../../ApiParaPr/Methods/SetOutlineLvl.md).

## Syntax

```javascript
expression.SetOutlineLvl(lvl);
```

`expression` - A variable that represents an [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| lvl | Optional | Number \| null \| undefined |  | The outline level. Possible values: 1-9. The 1 value means the basic outline level. To set no outline level, use this method without a parameter. |

## Returns

boolean

## Example

Assign an outline level to paragraphs to structure the document hierarchy in a document.

```javascript editor-docx
// How do I mark a paragraph as a heading level for the document outline in a document?

// Control which paragraphs appear as headings in the navigation pane of a document.

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
