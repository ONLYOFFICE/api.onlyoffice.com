# SetItalic

Sets the italic property to the text character.

## Syntax

```javascript
expression.SetItalic(isItalic);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isItalic | Required | boolean |  | Specifies if the contents of the current Range are displayed italicized or not. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md) \| null

## Example

Apply italic formatting to a range of text in a document.

```javascript editor-docx
// How do I make a portion of text appear in italic style in a document?

// Slant selected words into italic to add emphasis or distinguish them in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 24);
range.SetItalic(true);
```
