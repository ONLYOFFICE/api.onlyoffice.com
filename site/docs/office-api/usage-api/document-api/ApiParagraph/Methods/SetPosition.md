# SetPosition

Specifies an amount by which text is raised or lowered for this paragraph in relation to the default
baseline of the surrounding non-positioned text.

## Syntax

```javascript
expression.SetPosition(nPosition);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPosition | Required | [hps](../../Enumeration/hps.md) |  | Specifies a positive (raised text) or negative (lowered text) measurement in half-points (1/144 of an inch). |

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## Example

Raise or lower paragraph text relative to the surrounding baseline in a document.

```javascript editor-docx
// How do I shift a paragraph's text up or down from its normal vertical position in a document?

// Offset a paragraph vertically to achieve a superscript or subscript-like effect in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text. ");
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("This is a paragraph with the text lowered 15 points (30 half-points).");
doc.Push(paragraph2);
paragraph2.SetPosition(-30);
```
