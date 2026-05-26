# SetDoubleStrikeout

Specifies that the contents of this paragraph are displayed with two horizontal lines through each character displayed on the line.

## Syntax

```javascript
expression.SetDoubleStrikeout(isDoubleStrikeout);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isDoubleStrikeout | Required | boolean |  | Specifies that the contents of the current paragraph are displayed double struck through. |

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## Example

Draw two horizontal lines through every character in a paragraph in a document.

```javascript editor-docx
// How do I cross out paragraph text with a double strikethrough line in a document?

// Mark paragraph content as deleted or irrelevant using a double strikeout in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the text struck out with two lines.");
paragraph.SetDoubleStrikeout(true);
```
