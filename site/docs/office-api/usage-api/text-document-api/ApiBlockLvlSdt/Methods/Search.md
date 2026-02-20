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

This example shows how to make a search in the content control object.

```javascript editor-docx playground
// Creates a block content control, adds two paragraphs to it, and searches for the specified word among the text in this container.

// How to search for the specified string in the ApiBlockLvlSdt object.

// Searches for the specified word in the block level content control and returns it as the ApiRange object.

// Searches for the specified word in the ApiBlockLvlSdt object and sets the bold property to the second occurrence of this word in the container.

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
