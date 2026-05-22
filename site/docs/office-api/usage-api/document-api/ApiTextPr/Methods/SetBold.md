# SetBold

Sets the bold property to the text character.

## Syntax

```javascript
expression.SetBold(isBold);
```

`expression` - A variable that represents a [ApiTextPr](../ApiTextPr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isBold | Required | boolean |  | Specifies that the contents of the run are displayed bold. |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

Apply bold formatting to the default text characters in a document.

```javascript editor-docx
// How do I make text appear heavier and bolder throughout a document?

// Change the weight of the default font so that all text renders with a bold appearance in a document.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetBold(true);
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text with the font weight set to bold using the text properties.");
```
