# SetPageSize

Specifies the properties (size and orientation) for all the pages in the current section.

## Syntax

```javascript
expression.SetPageSize(nWidth, nHeight, isPortrait);
```

`expression` - A variable that represents a [ApiSection](../ApiSection.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nWidth | Required | [twips](../../Enumeration/twips.md) |  | The page width measured in twentieths of a point (1/1440 of an inch). |
| nHeight | Required | [twips](../../Enumeration/twips.md) |  | The page height measured in twentieths of a point (1/1440 of an inch). |
| isPortrait | Optional | boolean | false | Specifies the orientation of all the pages in this section (if set to true, then the portrait orientation is chosen). |

## Returns

boolean

## Example

Set the width and height of all pages within a section in a document.

```javascript editor-docx
// How do I change the physical dimensions of the pages in a section in a document?

// Resize the pages of a section to fit a custom paper format in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a page with a page size set. ");
paragraph.AddText("The page width is 5 inches (7200 twentieths of a point). ");
paragraph.AddText("The page height is 3 inches (4320 twentieths of a point). ");
paragraph.AddText("The font size is default (11 points).");
let section = doc.GetFinalSection();
section.SetPageMargins(720, 720, 720, 720);
section.SetPageSize(7200, 4320);
```
