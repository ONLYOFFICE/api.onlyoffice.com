# SetIndRight

Sets the paragraph right side indentation.

Inherited from [ApiParaPr.SetIndRight](../../ApiParaPr/Methods/SetIndRight.md).

## Syntax

```javascript
expression.SetIndRight(nValue);
```

`expression` - A variable that represents an [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nValue | Required | [twips](../../Enumeration/twips.md) |  | The paragraph right side indentation value measured in twentieths of a point (1/1440 of an inch). |

## Returns

boolean

## Example

Move the entire right edge of a paragraph inward from the page margin in a document.

```javascript editor-docx
// How do I shift a paragraph away from the right margin by a specific amount in a document?

// Narrow a paragraph from the right side to create white space or set it apart from other content in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the right offset of 2 inches set to it. ");
paragraph.AddText("We also aligned the text in it by the right side. ");
paragraph.AddText("This sentence is used to add lines for demonstrative purposes.");
paragraph.SetJc("right");
paragraph.SetIndRight(2880);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a paragraph without any offset set to it. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
doc.Push(paragraph);
```
