# SetPageMargins

Specifies the page margins for all the pages in this section.

## Syntax

```javascript
expression.SetPageMargins(left, top, right, bottom);
```

`expression` - A variable that represents a [ApiSection](../ApiSection.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| left | Required | [twips](../../Enumeration/twips.md) |  | The left margin width measured in twentieths of a point (1/1440 of an inch). |
| top | Required | [twips](../../Enumeration/twips.md) |  | The top margin height measured in twentieths of a point (1/1440 of an inch). |
| right | Required | [twips](../../Enumeration/twips.md) |  | The right margin width measured in twentieths of a point (1/1440 of an inch). |
| bottom | Required | [twips](../../Enumeration/twips.md) |  | The bottom margin height measured in twentieths of a point (1/1440 of an inch). |

## Returns

boolean

## Example

Set the top, bottom, left, and right margins for pages in a section in a document.

```javascript editor-docx
// How do I define the blank space around the edges of each page in a document?

// Adjust the border spacing on all sides of the pages within a section in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a page with margins set. ");
paragraph.AddText("The left margin is 5 inches wide (7200 twentieths of a point). ");
paragraph.AddText("The top margin is 2 inches high (2880 twentieths of a point). ");
paragraph.AddText("The right margin is 1 inch wide (1440 twentieths of a point). ");
paragraph.AddText("The bottom margin is 4 inches high (5760 twentieths of a point). ");
let section = doc.GetFinalSection();
section.SetPageMargins(7200, 2880, 1440, 5760);
```
