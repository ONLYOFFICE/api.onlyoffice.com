# SetBorderWidth

Sets annotation border width.

## Syntax

```javascript
expression.SetBorderWidth(width);
```

`expression` - A variable that represents a [ApiBaseAnnotation](../ApiBaseAnnotation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| width | Required | [pt](../../Enumeration/pt.md) |  | No description provided. |

## Returns

boolean

## Example

This example creates a square annotation and sets thick border width to it.

```javascript editor-pdf
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetBorderWidth(2);

```
