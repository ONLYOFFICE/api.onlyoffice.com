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

Return a new range as the intersection of the current range with another range in a document.

```javascript editor-docx
// How to intersect two ranges into the new one in a document.

// Create a range by intersection of two and make its text bold in a document.

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
