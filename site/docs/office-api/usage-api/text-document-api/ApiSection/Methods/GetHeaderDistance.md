# GetHeaderDistance

Returns the distance from the top edge of the page to the top edge of the header.

## Syntax

```javascript
expression.GetHeaderDistance();
```

`expression` - A variable that represents a [ApiSection](../ApiSection.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[twips](../../Enumeration/twips.md)

## Example

This example sets the header distance and then reads it back.

```javascript editor-docx
// How to get header distance of the section.

// Retrieve the current distance between the top of the page and the header.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a page with a header. ");
paragraph.AddText("Scroll up the page to see it.");
let section = doc.GetFinalSection();
let header = section.GetHeader("default", true);
section.SetHeaderDistance(1440);
paragraph = header.GetElement(0);
paragraph.AddText("This is a page header. ");
paragraph.AddText("The distance from the page top to the header is 1 inch (" + section.GetHeaderDistance() + " twentieths of a point).");
```
