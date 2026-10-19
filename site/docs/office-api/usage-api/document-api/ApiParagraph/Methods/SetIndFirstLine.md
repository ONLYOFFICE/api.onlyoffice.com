# SetIndFirstLine

Sets the paragraph first line indentation.

Inherited from [ApiParaPr.SetIndFirstLine](../../ApiParaPr/Methods/SetIndFirstLine.md).

## Syntax

```javascript
expression.SetIndFirstLine(nValue);
```

`expression` - A variable that represents an [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nValue | Required | [twips](../../Enumeration/twips.md) |  | The paragraph first line indentation value measured in twentieths of a point (1/1440 of an inch). |

## Returns

boolean

## Example

Indent the first line of a paragraph by a set amount in a document.

```javascript editor-docx
// How do I push the opening line of a paragraph inward from the left margin in a document?

// Give a paragraph a traditional first-line indent to improve readability in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the indent of 1 inch set to the first line. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
paragraph.SetIndFirstLine(1440);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a paragraph without any indent set to the first line. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
doc.Push(paragraph);
```
