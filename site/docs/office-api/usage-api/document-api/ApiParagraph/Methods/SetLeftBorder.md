# SetLeftBorder

Specifies the border which will be displayed at the left side of the page around the specified paragraph.

Inherited from [ApiParaPr.SetLeftBorder](../../ApiParaPr/Methods/SetLeftBorder.md).

## Syntax

```javascript
expression.SetLeftBorder(sType, nSize, nSpace, r, g, b);
```

`expression` - A variable that represents an [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | [BorderType](../../Enumeration/BorderType.md) |  | The border style. |
| nSize | Required | [pt_8](../../Enumeration/pt_8.md) |  | The width of the current left border measured in eighths of a point. |
| nSpace | Required | [pt](../../Enumeration/pt.md) |  | The spacing offset to the left of the paragraph measured in points used to place this border. |
| r | Required | [byte](../../Enumeration/byte.md) |  | Red color component value. |
| g | Required | [byte](../../Enumeration/byte.md) |  | Green color component value. |
| b | Required | [byte](../../Enumeration/byte.md) |  | Blue color component value. |

## Returns

boolean

## Example

Add a colored border along the left edge of a paragraph in a document.

```javascript editor-docx
// How do I draw a vertical line on the left side of a paragraph in a document?

// Highlight a paragraph by placing a styled border on its left side in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is the first paragraph. We will add a two point orange border at its left side. ");
paragraph.AddText("The space between the left side of the paragraph and the border is 8 points. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
paragraph.SetLeftBorder("single", 16, 8, 255, 111, 61);
```
