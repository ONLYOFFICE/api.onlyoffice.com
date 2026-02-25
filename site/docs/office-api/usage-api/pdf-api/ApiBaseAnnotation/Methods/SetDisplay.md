# SetDisplay

Sets annotation display type.

## Syntax

```javascript
expression.SetDisplay(display);
```

`expression` - A variable that represents a [ApiBaseAnnotation](../ApiBaseAnnotation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| display | Required | [DisplayType](../../Enumeration/DisplayType.md) |  | No description provided. |

## Returns

boolean

## Example

This example creates a square annotation and sets display to it.

```javascript editor-pdf
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetDisplay("hidden");

```
