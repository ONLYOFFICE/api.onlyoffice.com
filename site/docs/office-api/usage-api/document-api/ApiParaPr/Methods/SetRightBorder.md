# SetRightBorder

Specifies the border which will be displayed at the right side of the page around the specified paragraph.

## Syntax

```javascript
expression.SetRightBorder(type, size, space, color);
```

`expression` - A variable that represents an [ApiParaPr](../ApiParaPr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | Required | [BorderType](../../Enumeration/BorderType.md) |  | The border style. |
| size | Required | [pt_8](../../Enumeration/pt_8.md) |  | The width of the current right border measured in eighths of a point. |
| space | Required | [pt](../../Enumeration/pt.md) |  | The spacing offset to the right of the paragraph measured in points used to place this border. |
| color | Required | [ApiColor](../../ApiColor/ApiColor.md) |  | The border color. |

## Returns

boolean

## Example

Add a border to the right side of a paragraph using the paragraph properties of a style in a document.

```javascript editor-docx
// How do I place a visible border on the right edge of a paragraph in a document?

// Highlight a paragraph by drawing a colored line along its right margin.

let doc = Api.GetDocument();
let myStyle = doc.CreateStyle("My document style");
let paraPr = myStyle.GetParaPr();
paraPr.SetRightBorder("single", 24, 0, Api.Color(255, 111, 61));
let paragraph = doc.GetElement(0);
paragraph.SetStyle(myStyle);
paragraph.AddText("This is the first paragraph. ");
paragraph.AddText("The paragraph properties styled above set a border at its right side.");
```
