# SetTopBorder

Specifies the border which will be displayed above a set of paragraphs which have the same set of paragraph border settings.

:::note
The paragraphs of the same style going one by one are considered as a single block, so the border is added to the whole block rather than to every paragraph in this block.
:::

Inherited from [ApiParaPr.SetTopBorder](../../ApiParaPr/Methods/SetTopBorder.md).

## Syntax

```javascript
expression.SetTopBorder(sType, nSize, nSpace, r, g, b);
```

`expression` - A variable that represents an [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | [BorderType](../../Enumeration/BorderType.md) |  | The border style. |
| nSize | Required | [pt_8](../../Enumeration/pt_8.md) |  | The width of the current top border measured in eighths of a point. |
| nSpace | Required | [pt](../../Enumeration/pt.md) |  | The spacing offset above the paragraph measured in points used to place this border. |
| r | Required | [byte](../../Enumeration/byte.md) |  | Red color component value. |
| g | Required | [byte](../../Enumeration/byte.md) |  | Green color component value. |
| b | Required | [byte](../../Enumeration/byte.md) |  | Blue color component value. |

## Returns

boolean

## Example

Draw a visible line above a paragraph to separate it from the content above in a document.

```javascript editor-docx
// How do I add a decorative or structural border along the top of a paragraph in a document?

// Visually divide sections of text by placing a styled line at the top of a paragraph in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is the first paragraph. We will add a thick orange border above it.");
paragraph.SetTopBorder("single", 24, 0, 255, 111, 61);
```
