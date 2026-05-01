# SetFontFamily

Sets all 4 font slots with the specified font family.

## Syntax

```javascript
expression.SetFontFamily(sFontFamily);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sFontFamily | Required | string |  | The font family or families used for the current paragraph. |

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## Example

Set all 4 font slots with the specified font family in a document.

```javascript editor-docx
// How to set font family to the text in a document.

// Create a paragraph and change its font family in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the font family set to 'Consolas'.");
paragraph.SetFontFamily("Consolas");
```
