# Search

Searches for a scope of a content control object. The search results are a collection of ApiRange objects.

## Syntax

```javascript
expression.Search(text, isMatchCase);
```

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | Required | string |  | Search string. |
| isMatchCase | Required | boolean |  | Case sensitive or not. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md)[]

## Example

Find text in a content control by a string and by a regular expression, then bold the matches.

```javascript editor-docx
// Look up a keyword across the content control paragraphs and match it with a RegExp.

// Bold the second keyword match, then bold every match found by the /paragraph/g expression.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
let paragraph1 = Api.CreateParagraph();
paragraph1.AddText("This is the first paragraph in the content control.");
blockLvlSdt.AddElement(paragraph1, 0);
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("This is the second paragraph in the content control.");
blockLvlSdt.AddElement(paragraph2, 1);
doc.AddElement(0, blockLvlSdt);

let byKeyword = blockLvlSdt.Search("paragraph");
byKeyword[1].SetBold(true);

let byRegExp = blockLvlSdt.Search(/paragraph/g);
for (let index = 0; index < byRegExp.length; index++)
	byRegExp[index].SetBold(true);
```
