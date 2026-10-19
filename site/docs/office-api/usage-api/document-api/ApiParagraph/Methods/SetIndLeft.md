# SetIndLeft

Sets the paragraph left side indentation.

Inherited from [ApiParaPr.SetIndLeft](../../ApiParaPr/Methods/SetIndLeft.md).

## Syntax

```javascript
expression.SetIndLeft(nValue);
```

`expression` - A variable that represents an [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nValue | Required | [twips](../../Enumeration/twips.md) |  | The paragraph left side indentation value measured in twentieths of a point (1/1440 of an inch). |

## Returns

boolean

## Example

Move the entire left edge of a paragraph inward from the page margin in a document.

```javascript editor-docx
// How do I shift a paragraph away from the left margin by a specific amount in a document?

// Push a paragraph's left boundary inward to create a visual offset from surrounding text in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the indent of 2 inches set to it. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.SetIndLeft(2880);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a paragraph without any indent set to it. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
doc.Push(paragraph);
```
