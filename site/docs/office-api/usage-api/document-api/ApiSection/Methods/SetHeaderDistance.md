# SetHeaderDistance

Specifies the distance from the top edge of the page to the top edge of the header.

## Syntax

```javascript
expression.SetHeaderDistance(nDistance);
```

`expression` - A variable that represents a [ApiSection](../ApiSection.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nDistance | Required | [twips](../../Enumeration/twips.md) |  | The distance from the top edge of the page to the top edge of the header measured in twentieths of a point (1/1440 of an inch). |

## Returns

boolean

## Example

Control how far the header sits from the top edge of the page in a document.

```javascript editor-docx
// How do I set the gap between the page top and the header area in a document?

// Adjust the spacing that separates the header from the upper edge of a page in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a page with a header. ");
paragraph.AddText("Scroll up the page to see it.");
let section = doc.GetFinalSection();
let header = section.GetHeader("default", true);
section.SetHeaderDistance(1440);
paragraph = header.GetElement(0);
paragraph.AddText("This is a page header. ");
paragraph.AddText("The distance from the page top to the header is 1 inch (1440 twentieths of a point).");
```
