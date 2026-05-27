# ExpandTo

Returns a new range that goes beyond the specified range in any direction and spans a different range. The current range has not changed.

## Syntax

```javascript
expression.ExpandTo(oRange);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oRange | Required | [ApiRange](../../ApiRange/ApiRange.md) |  | The range that will be expanded. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md) \| null

## Example

Stretch a text selection to cover a broader span of content in a document.

```javascript editor-docx
// How do I extend one text selection so it also includes another passage in a document?

// Widen an existing selection to bridge two separate areas of text in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Lorem ipsum dolor sit amet,");
paragraph.AddText(" consectetuer adipiscing elit,");
paragraph.AddText(" sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.");
let rangeFirst = doc.GetRange(0, 22);
let rangeSecond = doc.GetRange(49, 123);
let range = rangeFirst.ExpandTo(rangeSecond);
range.SetItalic(true);
```
