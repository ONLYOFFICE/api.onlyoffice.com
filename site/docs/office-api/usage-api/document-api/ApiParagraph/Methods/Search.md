# Search

Searches for a scope of a paragraph object. The search results are a collection of ApiRange objects.

## Syntax

```javascript
expression.Search(sText, isMatchCase);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | Required | string |  | Search string. |
| isMatchCase | Required | boolean |  | Case sensitive or not. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md)[]

## Example

Find text in a paragraph by a string and by a regular expression, then bold the matches.

```javascript editor-docx
// Look up a keyword and also match every digit sequence with a RegExp in one paragraph.

// Bold the first keyword match, then bold each number found by the /\d+/g expression.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Sample text 1 and text 2 within the paragraph.");

let byKeyword = paragraph.Search("text");
byKeyword[0].SetBold(true);

let byRegExp = paragraph.Search(/\d+/g);
for (let index = 0; index < byRegExp.length; index++)
	byRegExp[index].SetBold(true);
```
