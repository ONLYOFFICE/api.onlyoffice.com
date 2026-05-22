# SetContextualSpacing

Specifies that any space before or after this paragraph set using the 
[ApiParaPr#SetSpacingBefore](../../ApiParaPr/Methods/SetSpacingBefore.md) or [ApiParaPr#SetSpacingAfter](../../ApiParaPr/Methods/SetSpacingAfter.md) spacing element, should not be applied when the preceding and 
following paragraphs are of the same paragraph style, affecting the top and bottom spacing respectively.

## Syntax

```javascript
expression.SetContextualSpacing(isContextualSpacing);
```

`expression` - A variable that represents a [ApiParaPr](../ApiParaPr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isContextualSpacing | Required | boolean |  | The true value will enable the paragraph contextual spacing. |

## Returns

boolean

## Example

Suppress spacing between adjacent same-styled paragraphs in a document.

```javascript editor-docx
// How do I remove extra space between paragraphs that share the same style in a document?

// Keep visually grouped paragraphs compact by ignoring before/after spacing within a style.

let doc = Api.GetDocument();
let myStyle = doc.CreateStyle("My document style");
let paraPr = myStyle.GetParaPr();
paraPr.SetContextualSpacing(true);
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with contextual spacing set to 'false' (no paragraph style is applied).");
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a paragraph with contextual spacing set to 'false' (no paragraph style is applied).");
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.SetStyle(myStyle);
paragraph.AddText("This is a paragraph with contextual spacing set to 'true' (paragraph style is applied).");
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.SetStyle(myStyle);
paragraph.AddText("This is a paragraph with contextual spacing set to 'true' (paragraph style is applied).");
doc.Push(paragraph);
```
