# CreateTextAnnot

Creates text annotation.

## Syntax

```javascript
expression.CreateTextAnnot(rect);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rect | Required | [Rect](../../Enumeration/Rect.md) |  | annotation rect. |

## Returns

[ApiTextAnnotation](../../ApiTextAnnotation/ApiTextAnnotation.md)

## Example

Create a text annotation and add it to the page.

```javascript editor-pdf
// How to create the text annot in a PDF document?

// Create the text annot using the PDF document API.

let doc = Api.GetDocument();
let textAnnot = Api.CreateTextAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(textAnnot);
```
