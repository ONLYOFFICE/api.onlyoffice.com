# SetFontFamily

Sets all 4 font slots with the specified font family.

## Syntax

```javascript
expression.SetFontFamily(fontFamily);
```

`expression` - A variable that represents an [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| fontFamily | Optional | string \| null |  | The font family or families used for the current paragraph. Pass *null* or omit it to remove the font family. |

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md) \| null \| undefined

## Example

Apply a specific typeface to all text in a paragraph in a document.

```javascript editor-docx
// How do I change the font family used for a paragraph's text in a document?

// Switch a paragraph to a different typeface to match a desired visual style in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the font family set to 'Consolas'.");
paragraph.SetFontFamily("Consolas");
```
