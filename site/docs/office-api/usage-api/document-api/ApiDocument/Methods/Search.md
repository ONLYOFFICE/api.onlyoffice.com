# Search

Searches for a scope of a document object. The search results are a collection of ApiRange objects.

## Syntax

```javascript
expression.Search(sText, isMatchCase);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | Required | string |  | Search string. |
| isMatchCase | Required | boolean |  | Case sensitive or not. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md)[]

## Example

Find text in a document by a string and by a regular expression, then bold the matches.

```javascript editor-docx
// Combine a keyword lookup with a RegExp that matches every numbered label.

// Bold the second keyword match, then bold each label found by the /№\d+/g expression.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is paragraph №1.");
paragraph = Api.CreateParagraph();
paragraph.AddText("This is paragraph №2.");
doc.Push(paragraph);

let byKeyword = doc.Search("paragraph");
byKeyword[1].SetBold(true);

let byRegExp = doc.Search(/№\d+/g);
for (let index = 0; index < byRegExp.length; index++)
	byRegExp[index].SetBold(true);
```
