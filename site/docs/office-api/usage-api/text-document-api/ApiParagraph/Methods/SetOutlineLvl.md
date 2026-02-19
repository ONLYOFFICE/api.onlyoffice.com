# SetOutlineLvl

Sets the outline level for the specified properties.

## Syntax

```javascript
expression.SetOutlineLvl(nLvl);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nLvl | Optional | Number |  | The outline level. Possible values: 0-8. The 0 value means the basic outline level. To set no outline level, use this method without a parameter. |

## Returns

boolean

## Example

This example shows how to get the outline level of the specified paragraph via paragraph properties.

```javascript editor-docx
const doc = Api.GetDocument();

const paragraph = doc.GetElement(0);
const paraPr = paragraph.GetParaPr();

const levelBefore = paraPr.GetOutlineLvl();
paraPr.SetOutlineLvl(8);
const levelAfter = paraPr.GetOutlineLvl();

let text =  'Outline level (index) for this paragraph is currently set to ' + levelAfter;
text += ',\nbut originally was set to ' + levelBefore;
paragraph.AddText(text);

```
