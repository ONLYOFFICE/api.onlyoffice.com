# SetBottomBorder

Specifies the border which will be displayed below a set of paragraphs which have the same paragraph border settings.

:::note
The paragraphs of the same style going one by one are considered as a single block, so the border is added to the whole block rather than to every paragraph in this block.
:::

Inherited from [ApiParaPr.SetBottomBorder](../../ApiParaPr/Methods/SetBottomBorder.md).

## Syntax

```javascript
expression.SetBottomBorder(type, size, space, color);
```

`expression` - A variable that represents an [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | Required | [BorderType](../../Enumeration/BorderType.md) |  | The border style. |
| size | Required | [pt_8](../../Enumeration/pt_8.md) |  | The width of the current bottom border measured in eighths of a point. |
| space | Required | [pt](../../Enumeration/pt.md) |  | The spacing offset below the paragraph measured in points used to place this border. |
| color | Required | [ApiColor](../../ApiColor/ApiColor.md) |  | The border color. |

## Returns

boolean

## Example

Draw a border below a paragraph in a document.

```javascript editor-docx
// How do I add a bottom border line to a paragraph in a document?

// Visually separate a paragraph from the content beneath it using a styled bottom border in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is the first paragraph. We will add a thin orange border below it.");
paragraph.SetBottomBorder("single", 8, 0, Api.Color(255, 111, 61));
```
