# GetFooterDistance

Returns the distance from the bottom edge of the page to the bottom edge of the footer.

## Syntax

```javascript
expression.GetFooterDistance();
```

`expression` - A variable that represents a [ApiSection](../ApiSection.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[twips](../../Enumeration/twips.md)

## Example

Read the gap between the page bottom edge and the footer in a document.

```javascript editor-docx
// How do I find out how much space separates the footer from the page bottom in a document?

// Check the footer spacing to verify that the layout matches the intended design in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a page with a footer. ");
paragraph.AddText("Scroll down the page to see it.");
let section = doc.GetFinalSection();
let footer = section.GetFooter("default", true);
section.SetFooterDistance(1440);
paragraph = footer.GetElement(0);
paragraph.AddText("This is a page footer. ");
paragraph.AddText("The distance from the page bottom to the footer is 1 inch (" + section.GetFooterDistance() + " twentieths of a point).");
```
