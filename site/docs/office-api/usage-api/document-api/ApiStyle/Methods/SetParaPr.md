# SetParaPr

Sets the paragraph properties to the current style.

## Syntax

```javascript
expression.SetParaPr(paraPr);
```

`expression` - A variable that represents a [ApiStyle](../ApiStyle.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| paraPr | Required | [ApiParaPr](../../ApiParaPr/ApiParaPr.md) |  | The paragraph properties that will be set. |

## Returns

[ApiStyle](../../ApiStyle/ApiStyle.md)

## Example

Apply paragraph settings to the specified style in a document.

```javascript editor-docx
// Create a paragraph, add a text to it, and set the line spacing and justify in a document.

// Specify the text properties object and apply its settings to the style object in a document.

let doc = Api.GetDocument();
let normalStyle = doc.GetDefaultStyle("paragraph");
let paraPr = Api.CreateParaPr();
paraPr.SetSpacingLine(480, "auto");
paraPr.SetJc("both");
normalStyle.SetParaPr(paraPr);

let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the line spacing, text justification and indent set using the paragraph style. ");
paragraph.AddText("We do not change the style of the paragraph itself. ");
paragraph.AddText("Only document-wide paragraph styles are applied.");
doc.Push(paragraph);
```
