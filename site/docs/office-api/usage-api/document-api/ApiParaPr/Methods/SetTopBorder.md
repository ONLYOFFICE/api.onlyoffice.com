# SetTopBorder

Specifies the border which will be displayed above a set of paragraphs which have the same set of paragraph border settings.

:::note
The paragraphs of the same style going one by one are considered as a single block, so the border is added to the whole block rather than to every paragraph in this block.
:::

## Syntax

```javascript
expression.SetTopBorder(type, size, space, color);
```

`expression` - A variable that represents an [ApiParaPr](../ApiParaPr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | Required | [BorderType](../../Enumeration/BorderType.md) |  | The border style. |
| size | Required | [pt_8](../../Enumeration/pt_8.md) |  | The width of the current top border measured in eighths of a point. |
| space | Required | [pt](../../Enumeration/pt.md) |  | The spacing offset above the paragraph measured in points used to place this border. |
| color | Required | [ApiColor](../../ApiColor/ApiColor.md) |  | The border color. |

## Returns

boolean

## Example

Add a top border above a paragraph in a document.

```javascript editor-docx
// How do I draw a line above a paragraph in a document?

// Separate a paragraph from the content above it using a visible border line in a document.

let doc = Api.GetDocument();
let myStyle = doc.CreateStyle("My document style");
let paraPr = myStyle.GetParaPr();
paraPr.SetTopBorder("single", 24, 0, Api.Color(255, 111, 61));
let paragraph = doc.GetElement(0);
paragraph.SetStyle(myStyle);
paragraph.AddText("This is the first paragraph. ");
paragraph.AddText("The paragraph properties styled above set a border above it.");
```
