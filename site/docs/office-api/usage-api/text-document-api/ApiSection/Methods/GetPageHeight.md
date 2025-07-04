# GetPageHeight

Gets page height for current section.

## Syntax

```javascript
expression.GetPageHeight();
```

`expression` - A variable that represents a [ApiSection](../ApiSection.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[twips](../../Enumeration/twips.md)

## Example

This example shows how to get the page height.

```javascript editor-docx
// How to get the page height.

// Get the final section of the page and get its height.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let section = doc.GetFinalSection();
let height = section.GetPageHeight();
paragraph.AddText("Page height = " + height);
```
