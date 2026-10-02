# SetSpacingBefore

Sets the spacing before the current paragraph.

If the value of the isBeforeAuto parameter is true, then any value of the nBefore is ignored. If isBeforeAuto parameter is not specified, then  it will be interpreted as false.

Inherited from [ApiParaPr.SetSpacingBefore](../../ApiParaPr/Methods/SetSpacingBefore.md).

## Syntax

```javascript
expression.SetSpacingBefore(nBefore, isBeforeAuto);
```

`expression` - A variable that represents an [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nBefore | Required | [twips](../../Enumeration/twips.md) |  | The value of the spacing before the current paragraph measured in twentieths of a point (1/1440 of an inch). |
| isBeforeAuto | Optional | boolean | false | The true value disables the spacing before the current paragraph. |

## Returns

boolean

## Example

Set the amount of space that appears before a paragraph in a document.

```javascript editor-docx
// How do I add extra space above a paragraph to separate it from the previous one in a document?

// Push a paragraph down from the preceding content by adjusting its top gap in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is an example of setting a space before a paragraph. ");
paragraph.AddText("The second paragraph will have an offset of one inch from the top. ");
paragraph.AddText("This is due to the fact that the second paragraph has this offset enabled.");
paragraph = Api.CreateParagraph();
paragraph.AddText("This is the second paragraph and it is one inch away from the first paragraph.");
paragraph.SetSpacingBefore(1440);
doc.Push(paragraph);
```
