# SetQuads

Sets quads to current markup annotation.

## Syntax

```javascript
expression.SetQuads(quads);
```

`expression` - A variable that represents a [ApiRedactAnnotation](../ApiRedactAnnotation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| quads | Required | [Quad](../../Enumeration/Quad.md)[] |  | No description provided. |

## Returns

boolean

## Example

This example sets quads for markup annotation.

```javascript editor-pdf
let doc = Api.GetDocument();
let markupAnnot = Api.CreateHighlightAnnot([84, 55, 231, 72]);
markupAnnot.SetQuads([[85, 73, 226, 73, 85, 87, 226, 87]]);
let page = doc.GetPage(0);
page.AddObject(markupAnnot);
console.log(`We set new quads to markup annotation`);
```
