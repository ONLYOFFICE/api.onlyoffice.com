# InsertWatermark

Inserts a watermark on each document page.

## Syntax

```javascript
expression.InsertWatermark(sText, bIsDiagonal);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | Optional | string | "WATERMARK" | Watermark text. |
| bIsDiagonal | Optional | boolean | false | Specifies if the watermark is placed diagonally (true) or horizontally (false). |

## Returns

boolean

## Example

Add a text watermark to every page in a document.

```javascript editor-docx
// How do I stamp a watermark string across all pages in a document?

// Mark draft or confidential content by overlaying a repeating label on each printed page.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("A watermark was inserted into this document.");
doc.InsertWatermark("Watermark");
```
