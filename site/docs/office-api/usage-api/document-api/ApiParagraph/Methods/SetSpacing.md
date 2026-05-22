# SetSpacing

Sets the text spacing measured in twentieths of a point.

## Syntax

```javascript
expression.SetSpacing(nSpacing);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nSpacing | Required | [twips](../../Enumeration/twips.md) |  | The value of the text spacing measured in twentieths of a point (1/1440 of an inch). |

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## Example

Set the character spacing for text in a paragraph in a document.

```javascript editor-docx
// How do I control the amount of space between characters in a paragraph in a document?

// Expand or compress the gaps between letters within a paragraph in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample paragraph.");
paragraph.SetSpacing(2);
```
