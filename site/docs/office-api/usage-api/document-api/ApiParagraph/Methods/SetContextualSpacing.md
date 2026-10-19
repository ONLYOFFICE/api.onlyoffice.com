# SetContextualSpacing

Specifies that any space before or after this paragraph set using the  [ApiParaPr#SetSpacingBefore](../../ApiParaPr/Methods/SetSpacingBefore.md) or [ApiParaPr#SetSpacingAfter](../../ApiParaPr/Methods/SetSpacingAfter.md) spacing element, should not be applied when the preceding and  following paragraphs are of the same paragraph style, affecting the top and bottom spacing respectively.

Inherited from [ApiParaPr.SetContextualSpacing](../../ApiParaPr/Methods/SetContextualSpacing.md).

## Syntax

```javascript
expression.SetContextualSpacing(isContextualSpacing);
```

`expression` - A variable that represents an [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isContextualSpacing | Required | boolean |  | The true value will enable the paragraph contextual spacing. |

## Returns

boolean

## Example

Control whether extra spacing is added between paragraphs of the same style in a document.

```javascript editor-docx
// How do I remove or keep extra space between adjacent paragraphs of the same style in a document?

// Adjust spacing behavior so that matching paragraphs sit closer together or farther apart in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with contextual spacing set to 'false'.");
paragraph.SetContextualSpacing(false);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a paragraph with contextual spacing set to 'false'.");
paragraph.SetContextualSpacing(false);
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a paragraph with contextual spacing set to 'false'.");
paragraph.SetContextualSpacing(false);
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a paragraph with contextual spacing set to 'true'.");
paragraph.SetContextualSpacing(true);
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a paragraph with contextual spacing set to 'true'.");
paragraph.SetContextualSpacing(true);
doc.Push(paragraph);
```
