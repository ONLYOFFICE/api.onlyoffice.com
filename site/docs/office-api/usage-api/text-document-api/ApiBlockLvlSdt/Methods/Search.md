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

Make a search in the content control object in a document.

```javascript editor-docx
// Create a block content control, add two paragraphs to it, and search for the specified word among the text in this container in a document.

// Search for the specified word in the block level content control and return it as the range object.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
let paragraph1 = Api.CreateParagraph();
paragraph1.AddText("This is the first paragraph in the content control.");
blockLvlSdt.AddElement(paragraph1, 0);
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("This is the second paragraph in the content control.");
blockLvlSdt.AddElement(paragraph2, 1);
doc.AddElement(0, blockLvlSdt);
blockLvlSdt.Search("paragraph")[1].SetBold(true);
```
