# CreateUnderlineAnnot

Creates underline annotation.

## Syntax

```javascript
expression.CreateUnderlineAnnot(rect);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rect | Required | [Rect](../../Enumeration/Rect.md) \| [Quad](../../Enumeration/Quad.md)[] |  | region to apply underline. |

## Returns

[ApiUnderlineAnnotation](../../ApiUnderlineAnnotation/ApiUnderlineAnnotation.md)

## Example

Add an underline annotation to marked text in a PDF.

```javascript editor-pdf
// How do I underline text with an annotation in a PDF?

// Create an underline annotation at specified coordinates and add it to a page in a PDF.

let doc = Api.GetDocument();
let underlineAnnot = Api.CreateUnderlineAnnot([[85.04985826771654,56.70000000000001,229.27237795275593,56.70000000000001,85.04985826771654,70.9988031496063,229.27237795275593,70.9988031496063]]);
let page = doc.GetPage(0);
page.AddObject(underlineAnnot);
```
