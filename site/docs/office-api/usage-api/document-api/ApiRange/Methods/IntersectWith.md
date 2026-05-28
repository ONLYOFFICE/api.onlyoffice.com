# IntersectWith

Returns a new range as the intersection of the current range with another range. The current range has not changed.

## Syntax

```javascript
expression.IntersectWith(oRange);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oRange | Required | [ApiRange](../../ApiRange/ApiRange.md) |  | The range that will be intersected with the current range. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md) \| null

## Example

Produce a new text selection from the overlapping portion of two highlighted regions in a document.

```javascript editor-docx
// How do I find the shared content between two text selections in a document?

// Combine two overlapping spans into their common area for focused formatting in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Lorem ipsum dolor sit amet,");
paragraph.AddText(" consectetuer adipiscing elit,");
paragraph.AddText(" sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.");
let rangeFirst = doc.GetRange(0, 49);
let rangeSecond = doc.GetRange(22, 123);
let range = rangeFirst.IntersectWith(rangeSecond);
range.SetBold(true);
```
