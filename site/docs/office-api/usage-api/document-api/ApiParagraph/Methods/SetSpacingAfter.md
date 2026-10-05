# SetSpacingAfter

Sets the spacing after the current paragraph.

If the value of the isAfterAuto parameter is true, then any value of the nAfter is ignored. If isAfterAuto parameter is not specified, then it  will be interpreted as false.

Inherited from [ApiParaPr.SetSpacingAfter](../../ApiParaPr/Methods/SetSpacingAfter.md).

## Syntax

```javascript
expression.SetSpacingAfter(nAfter, isAfterAuto);
```

`expression` - A variable that represents an [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nAfter | Required | [twips](../../Enumeration/twips.md) |  | The value of the spacing after the current paragraph measured in twentieths of a point (1/1440 of an inch). |
| isAfterAuto | Optional | boolean | false | The true value disables the spacing after the current paragraph. |

## Returns

boolean

## Example

Set the amount of space that appears after a paragraph in a document.

```javascript editor-docx
// How do I add extra space below a paragraph to separate it from the next one in a document?

// Control the gap that follows a paragraph to improve vertical rhythm in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is an example of setting a space after a paragraph. ");
paragraph.AddText("The second paragraph will have an offset of one inch from the top. ");
paragraph.AddText("This is due to the fact that the first paragraph has this offset enabled.");
paragraph.SetSpacingAfter(1440);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is the second paragraph and it is one inch away from the first paragraph.");
doc.Push(paragraph);
```
