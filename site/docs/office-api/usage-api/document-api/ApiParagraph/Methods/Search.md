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

Search for a word inside a paragraph and bold the first match in a document.

```javascript editor-docx
// How do I find a specific word within a paragraph in a document?

// Highlight a search result by applying bold formatting to the found text in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text. This text was added to the paragraph.");
let searchResults = paragraph.Search("text");
searchResults[0].SetBold(true);
```
