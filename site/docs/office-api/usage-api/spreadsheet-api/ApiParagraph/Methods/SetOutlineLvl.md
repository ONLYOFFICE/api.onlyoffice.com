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

Assign an outline level to each paragraph inside a shape in a spreadsheet.

```javascript editor-xlsx
// How do I mark paragraphs at different heading depths in a spreadsheet?

// Structure text by giving each paragraph a numbered depth in the outline hierarchy in a spreadsheet.

const worksheet = Api.GetActiveSheet();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);

const content = shape.GetContent();
const firstParagraph = content.GetElement(0);
firstParagraph.AddText('Outline level of this paragraph is ' + firstParagraph.GetOutlineLvl() + '.');

for (let levelIndex = 0; levelIndex < 9; levelIndex++) {
	const paragraph = Api.CreateParagraph();
	paragraph.SetOutlineLvl(levelIndex);
	const level = paragraph.GetOutlineLvl() + 1;
	paragraph.AddText('This is a paragraph with outline level ' + level + '.');
	content.Push(paragraph);
}
```
